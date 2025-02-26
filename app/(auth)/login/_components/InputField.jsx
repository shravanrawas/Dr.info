"use client";

import React from "react";

const InputField = ({ label, type = "text", className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={label}
      className={`px-4 py-5 text-xl rounded-xl border border-solid bg-slate-400 bg-opacity-10 border-slate-600 text-slate-600 w-full ${className}`}
      {...props}
    />
  );
};

export default InputField;
