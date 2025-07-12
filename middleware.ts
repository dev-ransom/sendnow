import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, DEFAULT_UNAUTHENTICATED_REDIRECT, isProtectedRoute, publicRoutes } from './app/constants/routes';


// middleware.ts
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth-token');
  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isApiRoute = pathname.startsWith(apiAuthPrefix);
  const isOtpVerification = pathname.includes('/verify-otp');

  // Allow API routes and OTP verification
  if (isApiRoute || isOtpVerification) {
    return NextResponse.next();
  }

  // Handle auth routes
  if (isAuthRoute) {
    if (authToken) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
    }
    return NextResponse.next();
  }

  // Check protected routes
  if (isProtectedRoute(pathname)) {
    if (!authToken) {
      const redirectUrl = new URL(DEFAULT_UNAUTHENTICATED_REDIRECT, request.url);
      redirectUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  // Allow public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Default allow (or return 404)
  return NextResponse.next();
}