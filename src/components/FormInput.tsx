import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function FormInput({ label, error, className = "", ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={props.id} className="text-[0.85em] font-[500]">
          {label}
        </label>
      )}
      <input
        className={`border-2 py-2 px-3 text-[0.85em] bg-transparent focus:border-[#B58B37] focus:outline-none transition-colors ${
          error ? "border-red-500" : "border-gray-500"
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-[0.75em] text-red-400 mt-1" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
