import About from "../Hero/About.jsx";

function Hero() {
  return (
    <div className="my-[100px]">
      <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight"><span className="font-bold">Emmanuel</span> Essien</h1>
      <p className="font-medium text-md md:text-2xl">Software Developer </p>
      <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[85px] md:w-[121px] border border-green-900"></div>
      <About/>
    </div>
  );
}

export default Hero;
