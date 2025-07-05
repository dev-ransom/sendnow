"use client";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  childProps?: string;
  onClick?: () => void;
  className?: string;
};

export const ActionButton = ({
  children,
  variant = "primary",
  isLoading = false,
  onClick,
  childProps,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-[73px] font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary: `bg-[#18B1FF] 
      text-white 
      hover:shadow-[0_0_2px_#18B1FF,0_0_4px_#18B1FF,0_0_6px_#18B1FF,0_0_8px_#18B1FF]`,
    secondary: `bg-white text-[#000000] border-2 border-[#18B1FF] 
      hover:bg-[#18B1FF] hover:text-white
      hover:shadow-[0_0_2px_#18B1FF,0_0_4px_#18B1FF,0_0_6px_#18B1FF,0_0_8px_#18B1FF]`,
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        <div className={`${childProps}`}>{children}</div>
      )}
    </button>
  );
};
