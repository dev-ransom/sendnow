'use client';
import { usePathname } from 'next/navigation';

const useAuthImage = () => {
  const pathname = usePathname();

  const carouselImages: Record<string, any> = {
    signup: {
      steps: {
        'verify-code': 'auth-verify.png',
        'sign-up': 'auth-signup.png',
      }
    },

    login: constructMediaUrl('auth-login.jpeg'),
    'forgot-password': constructMediaUrl('auth-forgot-password.jpeg'),
    'reset-password': constructMediaUrl('auth-forgot-password.jpeg'),
    'admin-signup': constructMediaUrl('admin-signup.png'),
    'admin-login': constructMediaUrl('admin-login.png')
  };

  // Function to get the correct image based on route and section
  const getBackgroundImage = (route: string, step?: string, category?: string): string => {
    if (carouselImages[route]?.steps && step && step === 'account-setup' && category) {
      return carouselImages[route].steps['account-setup'][category];
    }
    if (carouselImages[route]?.steps && step) {
      return carouselImages[route].steps[step];
    }
    return carouselImages[route] || constructMediaUrl('auth-signup.png');
  };

  const backgroundImage = getBackgroundImage(
    pathname?.split('/').pop() as string,
    signupCurrentStep,
    selectedCategory as string
  );

  return {
    backgroundImage
  };
};

export default useAuthImage;
