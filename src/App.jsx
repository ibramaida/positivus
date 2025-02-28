import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { sliders } from "./sliders";
import Scroller from "./components/Scroller";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="wrapper mx-auto space-y-12">
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
      </main>
    </>
  );
};

export default App;
