import React from "react";
import Accordion from "./Accordion";

const Work = () => {
  return (
    <section className="max-w-[min(100%-2rem,1440px)] mx-auto mb-16 space-y-8">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <div className="flex flex-col items-center md:flex-row">
          <h2 className="bg-primary p-2 leading-none text-center rounded-lg md:text-nowrap">
            Our Working
          </h2>
          <h2 className="bg-primary p-2 leading-none text-center rounded-lg md:text-nowrap">
            Process
          </h2>
        </div>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Step-by-Step Guide to Achieving
          {/* <br /> */}
          Your Business Goals
        </p>
      </div>
      <div className="space-y-4">
        <Accordion
          num="01"
          title="Consultation"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Accordion
          num="02"
          title="Research and Strategy Development"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet dolor sequi dolores dicta quas, natus consequuntur delectus soluta, inventore sit hic recusandae similique Quas, iure tenetur? Quidem harum autem aliquid eveniet dolor sequi dolores dicta quas, natus consequuntur delectus soluta, inventore sit hic recusandae."
        />
        <Accordion
          num="03"
          title="Implementation"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae."
        />
        <Accordion
          num="04"
          title="Monitoring and Optimization"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae."
        />
        <Accordion
          num="05"
          title="Reporting and Communication"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae."
        />
        <Accordion
          num="06"
          title="Continual Improvement"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic recusandae inventore sit hic recusandae. consectetur adipisicing elit. Quas, iure tenetur? Quidem harum autem aliquid eveniet  inventore sit hic."
        />
      </div>
    </section>
  );
};

export default Work;
