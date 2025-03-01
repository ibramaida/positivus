import React from "react";

const CaseStudies = () => {
  return (
    <section className="space-y-8 mt-16 ml-4 md:max-w-[min(100%-2rem,1440px)] md:mx-auto">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg text-nowrap">
          Case Studies
        </h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className=" overflow-x-auto md:overflow-x-visible flex gap-4 md:gap-0 md:bg-black md:rounded-4xl">
        <div className="grow-0 rounded-4xl bg-black shrink-0 basis-[300px] md:grow-1 md:shrink-0 md:basis-[30%] p-12 flex flex-col gap-4 ">
          <p className="text-white text-[14px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className="flex items-center gap-4 text-primary" href="#">
            <span>Learn more</span>
            <span>
              <img
                className="w-4"
                src="../src/assets/icons/Icon-6.svg"
                alt=""
              />
            </span>
          </a>
        </div>
        <div className="hidden md:block h-40 w-0.5 bg-gray-500 self-center"></div>
        <div className="grow-0 rounded-4xl bg-black shrink-0 basis-[300px] md:grow-1 md:shrink-0 md:basis-[30%] p-12 flex flex-col gap-4">
          <p className="text-white text-[14px]">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a className="flex items-center gap-4 text-primary" href="#">
            <span>Learn more</span>
            <span>
              <img
                className="w-4"
                src="../src/assets/icons/Icon-6.svg"
                alt=""
              />
            </span>
          </a>
        </div>
        <div className="hidden md:block h-40 w-0.5 bg-gray-500 self-center"></div>
        <div className="grow-0 rounded-4xl bg-black shrink-0 basis-[300px] md:grow-1 md:shrink-0 md:basis-[30%] p-12 flex flex-col gap-4">
          <p className="text-white text-[14px]">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a className="flex items-center gap-4 text-primary" href="#">
            <span>Learn more</span>
            <span>
              <img
                className="w-4"
                src="../src/assets/icons/Icon-6.svg"
                alt=""
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
