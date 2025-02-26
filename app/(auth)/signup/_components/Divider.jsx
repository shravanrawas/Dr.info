const Divider = () => {
  return (
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
  );
};

export default Divider;
