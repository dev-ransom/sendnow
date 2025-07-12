import React, { forwardRef } from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  width?: string;
  height?: string;
  buttonStyle?: "custom" | "outline" | "ghost";
  disabledClasses?: string;
  customClasses?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      loading = false,
      disabled = false,
      width = "w-auto",
      height = "h-[45px]",
      buttonStyle = "custom",
      disabledClasses = "text-white rounded-lg",
      customClasses = "",
      icon,
      iconPosition = "left",
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      ...props
    },
    ref
  ) => {
    // Dynamic classes based on props
    const baseClasses = `rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
      fullWidth ? "w-full" : width
    } ${height} ${className}`;

    const variantClasses = {
      primary:
        "bg-[#18B1FF]  text-white",
      secondary:
        "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white",
      danger: "bg-red-500 hover:bg-red-600 text-white",
    };

    const styleClasses = {
      custom: "",
      outline:
        "border border-base-light dark:border-base-dark bg-transparent hover:bg-opacity-10",
      ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    };

    const sizeClasses = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    };

    const disabledStateClasses = disabled
      ? `cursor-not-allowed opacity-70 ${disabledClasses}`
      : "";

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseClasses} ${variantClasses[variant]} ${
          styleClasses[buttonStyle]
        } ${sizeClasses[size]} ${
          disabled ? disabledStateClasses : customClasses
        }`}
        {...props}
      >
        {loading ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {label}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
