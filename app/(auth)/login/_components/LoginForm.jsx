"use client";

import React, { useState } from "react";
import Button from "./Button";
import LoginHeader from "./LoginHeader";
import SocialAuth from "./SocialAuth";
import InputField from "./InputField";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-5 w-full max-md:mt-10 max-md:max-w-full"
    >
      <LoginHeader />

      <div className="mt-12 space-y-4">
        <InputField
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        <InputField
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
      </div>

      <button
        type="button"
        className="self-end mt-4 text-base text-center text-slate-600 hover:text-blue-500"
      >
        Forgot Password?
      </button>

      <Button type="submit" className="mt-8 w-full">
        Continue
      </Button>

      <SocialAuth />

      <div className="flex gap-2.5 items-center self-center mt-4 text-base text-center">
        <p className="self-stretch my-auto text-slate-600">
          Don't have an account?
        </p>
       <Link href="/signup">
       <button
          type="button"
          className="self-stretch my-auto font-medium text-blue-500 hover:text-blue-600"
        >
          Sign Up
        </button>
       </Link>
      </div>
    </form>
  );
};

export default LoginForm;
