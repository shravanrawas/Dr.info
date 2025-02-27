const CoreValueCard = ({ image, title, description }) => {
    return (
      <article className="flex grow shrink gap-2 justify-center items-start self-stretch px-6 py-7 my-auto bg-white rounded-xl shadow-2xl min-h-[577px] min-w-60 w-[346px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col min-w-60 w-[385px]">
          <div className="flex gap-2 items-center px-8 w-full rounded-xl bg-[#E0E9FF] shadow-2xl min-h-[324px] max-md:px-5">
            <img
              src={image}
              alt={title}
              className="object-contain self-stretch my-auto w-full h-full aspect-[0.99] min-w-60"
            />
          </div>
          <div className="self-center mt-5 max-w-full text-center text-slate-700 w-[336px]">
            <h3 className="text-3xl font-medium rotate-[1.0530111106451509e-16rad]">
              {title}
            </h3>
            <p className="mt-3 text-xl font-light rotate-[1.0530111106451509e-16rad]">
              {description}
            </p>
          </div>
        </div>
      </article>
    );
  };
  
  export default CoreValueCard;
  