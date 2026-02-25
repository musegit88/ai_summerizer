import { github } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-certer flex-col">
      <nav className="flex justify-between items-center w-full pt-4 mb-10">
        <h1 className="text-2xl font-bold blue_gradient">TL;DRead</h1>
        <button
          onClick={() =>
            window.open("https://github.com/musegit88/ai_summerizer")
          }
        >
          <img
            src={github}
            alt="github"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          />
        </button>
      </nav>
      <div className="head_text">
        Summarize Any Article Instantly
        <br className="max-md:hidden" /> with{" "}
        <span className="sky_gradient">OpenAI GPT-4</span>
      </div>
      <h2 className="desc">
        Smarter Reading Starts Here. TL;DRead is an AI-powered summarizer that
        transforms lengthy articles into concise, structured summaries — saving
        you time without sacrificing insight.
      </h2>
    </header>
  );
};

export default Hero;
