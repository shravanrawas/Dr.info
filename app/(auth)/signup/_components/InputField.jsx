"use client";

import React from "react";

const InputField = ({
  type = "text",
  placeholder,
  className = "",
  icon,
  fullWidth = false,
}) => {
  return (
    <div
      className={`relative ${fullWidth ? "w-full" : "grow shrink-0 basis-0"}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-5 text-xl text-slate-600 rounded-xl border border-solid border-slate-600 bg-slate-400 bg-opacity-10 w-full ${className}`}
      />
      {icon && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputField;
