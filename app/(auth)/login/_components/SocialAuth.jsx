import React from "react";

const SocialAuth = () => {
  return (
    <section className="mt-4">

      <div className="flex flex-row gap-5 justify-between items-center mt-6 text-xl text-center whitespace-nowrap text-slate-600 max-md:flex-col max-md:gap-2 max-md:w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/810928d5396f354744bad43745aa04c53464cf6c2c16acb5d6459df91b0e57af?placeholderIfAbsent=true"
          className="object-contain my-auto w-auto max-w-[40%] max-md:max-w-[60%]"
        />
        <p className="self-stretch max-md:text-sm">Or</p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/142a224c770233c5ae63b7c95fc69ebed137915609091f38715a84e3afc0f447?placeholderIfAbsent=true"
          className="object-contain my-auto w-auto max-w-[40%] max-md:max-w-[60%]"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="flex gap-5 justify-center items-center mt-4 w-full max-w-[156px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/f63114100f9d5b2d9b993fb706b0315e67394ecb206d5182032238d17e2a7574?placeholderIfAbsent=true"
            alt="Social login option 1"
            className="w-9 h-9 object-contain cursor-pointer"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/6eb1ae2b43c9c15f78b99400888f66c8aa7035ec0d9ac5fae6f6b358e8088748?placeholderIfAbsent=true"
            alt="Social login option 2"
            className="w-9 h-9 object-contain cursor-pointer"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/b6a1ee3650ffb12451986463ffc08a0cc5b283bbdbaa2c94e89042e07e4ab89f?placeholderIfAbsent=true"
            alt="Social login option 3"
            className="w-9 h-9 object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialAuth;
