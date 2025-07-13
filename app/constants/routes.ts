/**
 * Public routes accessible to all users
 * These don't require authentication
 */
export const publicRoutes = [
    '/',          // Home/Landing page
    '/about',     // About page
    '/contact',   // Contact page
    '/faq',       // FAQ page
    '/privacy',   // Privacy policy
    '/features',  // Features overview
  ];
  
  /**
   * Authentication routes for SMS-based auth
   * These will redirect authenticated users to the chat
   */
  export const authRoutes = [
    '/auth/login',
     '/auth/chat',               // Phone number input
    '/auth/verify',          // SMS code verification
    '/auth/register',        // Optional registration after verification
    '/auth/retry',           // Resend SMS code
    '/auth/error',           // Authentication errors
  ];
  
  /**
   * Protected routes that require SMS authentication
   */
  export const protectedRoutes = [
    '/chat',                 // Main chat interface
    '/chat/[conversationId]',// Specific conversation
    '/profile',              // User profile
    '/settings',             // User settings
  ];
  
  /**
   * API routes prefix
   */
  export const apiAuthPrefix = '/api/auth';
  
  /**
   * Default redirect after successful authentication
   */
  export const DEFAULT_LOGIN_REDIRECT = '/chat';
  
  /**
   * Default redirect for unauthenticated users
   */
  export const DEFAULT_UNAUTHENTICATED_REDIRECT = '/auth/login';
  
  /**
   * Checks if a path matches any protected route pattern
   */
  export function isProtectedRoute(pathname: string): boolean {
    // Exact matches
    if (protectedRoutes.includes(pathname)) return true;
    
    // Dynamic route matches (like /chat/123)
    if (pathname.startsWith('/chat/')) return true;
    
    return false;
  }