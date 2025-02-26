import React from 'react'

function FeatureSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-24 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <div className="flex flex-col mb-0 w-full max-w-[1301px] max-md:mb-2.5 max-md:max-w-full">
            <div className="self-center max-w-full text-center w-[492px]">
              <h2 className="text-5xl font-medium text-black max-md:max-w-full max-md:text-4xl">
                Our Product Features
              </h2>
              <p className="text-base mt-2 leading-6 text-zinc-500 max-md:max-w-full">
                Redefining how physicians access medical knowledge to make
                informed decisions for a better patient care
              </p>
            </div>

            <div className="flex flex-col items-center mt-32 w-full max-md:mt-10 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/c390314fc185aaa914e224b02d6f478560de5e80d0664599bc68edfb74f8dac8?placeholderIfAbsent=true"
                alt="Product features"
                className="object-contain max-w-full rounded-3xl aspect-[1.64] w-[1276px]"
              />

              <div className="grid grid-cols-3 gap-5 mt-10 w-full max-md:grid-cols-1">
                <article className="flex flex-col items-center text-center">
                  <div className="w-44 max-w-full">
                    <div className="flex flex-col items-start bg-indigo-200 rounded-[40px]">
                      <div className="flex shrink-0 w-3 h-2.5 bg-blue-500 rounded-[40px]" />
                    </div>
                  </div>
                  <h3 className="mt-2 text-2xl font-medium text-black">
                    AI empowered summaries
                  </h3>
                  <p className="mt-2 text-xl font-light text-black">
                    AI driven, precision information from peer revewied journals
                    and validated sites
                  </p>
                </article>

                <article className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-medium text-black">
                    Exact Referencing
                  </h3>
                  <p className="mt-2 text-xl font-light text-black">
                    Precise referencing of the medical information from trusted
                    sources
                  </p>
                </article>

                <article className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-medium text-black">
                    Guideline-Based Information
                  </h3>
                  <p className="mt-2 text-xl font-light text-black">
                    Display of fulltext guidelines and AI generated summaries
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
  )
}

export default FeatureSection
