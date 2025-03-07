import React from "react";
import Hero from "../components/Hero";
import { sliders } from "../sliders";
import Scroller from "../components/Scroller";
import Services from "../components/Services";
import CTA from "../components/CTA";
import CaseStudies from "../components/CaseStudies";
import Work from "../components/Work";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="wrapper mx-auto space-y-16">
        <Hero />
        {sliders.map((slider) => (
          <Scroller
            key={slider.id}
            id={slider.id}
            images={slider.images}
            direction={slider.direction}
          />
        ))}
        <Services />
        <CTA />
      </main>
      <CaseStudies />
      <Work />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
