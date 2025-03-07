import React from "react";

import heroImg from "../assets/images/hero_image.png";

const About = () => {
  return (
    <main className="mt-50">
      <section className="wrapper mx-auto">
        <div className="grid gap-4 md:gap-8 md:grid-cols-2 p-4 md:p-12 bg-gray-200 rounded-4xl">
          <div>
            <img src={heroImg} alt="about" />
          </div>
          <div className="space-y-12">
            <div>
              <h1>Together for</h1>
              <h1>Success</h1>
            </div>
            <p className="max-w-[40ch]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              saepe voluptas veniam soluta corporis quo exercitationem corrupti
              cupiditate nemo quia delectus doloremque ratione, ea iste!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
