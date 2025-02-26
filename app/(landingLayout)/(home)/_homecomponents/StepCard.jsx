import React from "react";

const StepCard = ({ number, title, description }) => {
  return (
    <article className="flex flex-wrap gap-6 items-center w-full mb-5 max-md:max-w-full">
      <div className="flex grow shrink self-stretch my-auto bg-blue-400 rounded-xl h-[66px] w-[7px]" />
      <div className="grow shrink self-stretch my-auto min-w-60 w-[1076px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <span className="grow shrink self-stretch my-auto text-8xl font-bold text-center text-blue-100 w-[82px] max-md:text-4xl">
            {number}
          </span>
          <div className="flex flex-wrap grow shrink gap-10 justify-between items-start self-stretch my-auto min-w-60 text-slate-700 w-[897px] max-md:max-w-full">
            <h3 className="w-44 text-3xl font-semibold text-center">{title}</h3>
            <p className="text-xl w-[365px]">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StepCard;
