import React from "react";

import john from "../assets/images/team/john.svg";
import jane from "../assets/images/team/jane.svg";
import michael from "../assets/images/team/michael.svg";
import emily from "../assets/images/team/emily.svg";
import brian from "../assets/images/team/brian.svg";
import sarah from "../assets/images/team/sarah.svg";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    function: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    imgUrl: john,
  },
  {
    id: 2,
    name: "Jane Doe",
    function: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    imgUrl: jane,
  },
  {
    id: 3,
    name: "Michael Brown",
    function: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    imgUrl: michael,
  },
  {
    id: 4,
    name: "Emily Johnson",
    function: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    imgUrl: emily,
  },
  {
    id: 5,
    name: "Brian Williams",
    function: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    imgUrl: brian,
  },
  {
    id: 6,
    name: "Sarah Kim",
    function: "Content Creator",
    desc: "2+ years of experience in writing and editing, Skilled in creating compelling, SEO-optimized content for various industries",
    imgUrl: sarah,
  },
];

const Team = () => {
  return (
    <section className="space-y-8 mt-16 mb-16 max-w-[min(100%-2rem,1440px)] mx-auto relative">
      <div className="flex flex-col gap-6 items-center md:flex-row md:w-2xl">
        <h2 className="bg-primary p-2 leading-none rounded-lg text-nowrap">
          Team
        </h2>
        <p className="text-center md:text-left text-gray-500 text-[12px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="p-8 border rounded-4xl shadow-[0_3px_0_rgb(0,0,0)] relative"
          >
            <div className="flex items-end gap-4">
              <div>
                <img src={member.imgUrl} alt={`${member.name} image`} />
              </div>
              <div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-gray-500 text-[.825rem]">
                  {member.function}
                </p>
              </div>
            </div>
            <hr className="my-6 text-gray-300" />
            <p>{member.desc}</p>
            <a
              href="#"
              className="flex items-center justify-center size-8 rounded-full absolute top-8 right-8 bg-black text-primary hover:animate-pulse focus:animate-pulse"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        ))}
      </div>
      <button className="btn absolute right-0 bottom-[-4rem]">
        See all team
      </button>
    </section>
  );
};

export default Team;
