import React from "react";
import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <div className="scroll-progress fixed top-0 left-0 z-20 h-2 w-full bg-[#89fa02] "></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
