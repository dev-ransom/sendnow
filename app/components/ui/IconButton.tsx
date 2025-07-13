import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  active?: boolean;
}

export const IconButton = ({
  icon,
  active = false,
  className = "",
  ...props
}: IconButtonProps) => {
  const baseClasses =
    "w-12 h-12 flex cursor-pointer justify-center items-center rounded-lg transition-colors";
  const activeClasses = active ? "border-l-6 border-[#18b2ff] bg-gray-200" : "";

  return (
    <button
      className={`${baseClasses} ${activeClasses} ${className}`}
      {...props}
    >
      <img src={icon} alt="" className="w-8 h-8"/>
    </button>
  );
};
