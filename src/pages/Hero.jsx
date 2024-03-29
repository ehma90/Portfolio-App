import Profile from "../Component/Hero/Profile";

function Hero() {
  return (
    <>
      <div
        className="my-[100px] px-10 md:px-0"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-md md:text-2xl">Software Engineer</p>
        <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[85px] md:w-[121px] border border-green-900"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Profile />
      </div>
    </>
  );
}

export default Hero;
