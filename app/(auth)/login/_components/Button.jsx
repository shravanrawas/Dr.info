"use client";

import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-16 py-5 text-xl font-medium text-center rounded-xl transition-colors duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary:
      "bg-slate-400 bg-opacity-10 border border-slate-600 text-slate-600 hover:bg-slate-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
