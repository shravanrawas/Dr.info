import Link from "next/link";
import React from "react";

const LoginHeader = () => {
  return (
    <header className="flex flex-col self-end max-w-full text-4xl text-center text-slate-600 w-[574px]">
      <Link className="object-contain self-end w-9 aspect-square" href="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/15e1ca07bab7518d57caa60318e3aaf3f86a79925676de1170cb7a95fcf796d2?placeholderIfAbsent=true"
          alt="Top decoration"
          className="object-contain self-end w-9 aspect-square"
        />
      </Link>

      <h2 className="text-center mt-36 max-md:mt-10 self-center w-full">
        Login
      </h2>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/5462c6047103deba9d8a17e38a9d7feaa690975d461c206683e5bc1bb7cd7864?placeholderIfAbsent=true"
        alt="Divider"
        className="object-contain self-center aspect-[34.48] w-[69px]"
      />

      <h3 className="self-start mt-16 max-md:mt-10">Welcome Back to DrInfo</h3>
      <p className="self-start ml-8 text-base max-md:ml-2.5">
        Enter your credentials to access your account.
      </p>
    </header>
  );
};

export default LoginHeader;
