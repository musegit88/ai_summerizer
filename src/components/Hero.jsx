import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-certer flex-col">
      <nav className="flex justify-between items-center w-full pt-4 mb-10">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() => window.open("https://github.com")}
        >
          Github
        </button>
      </nav>
      <div className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">openAI GPT-4</span>
      </div>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
