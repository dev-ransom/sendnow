import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export const SearchInput = ({
  containerClassName = "",
  className = "",
  ...props
}: SearchInputProps) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
      <input
        className={`w-full py-2 pl-10 pr-4 bg-transparent text-sm rounded-lg border border-gray-300 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
};
