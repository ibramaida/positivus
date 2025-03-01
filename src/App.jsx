import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { sliders } from "./sliders";
import Scroller from "./components/Scroller";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";

const App = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
