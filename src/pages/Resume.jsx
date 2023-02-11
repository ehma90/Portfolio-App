import "../style/resume.css";

function Resume() {
  return (
    <div className="px-10 md:px-0 overflow-x-hidden">
      <div className="my-[100px]"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000">
        <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-md md:text-2xl">Software Developer</p>
        <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[148px] md:w-[221px] border border-green-900"></div>
      </div>

      <div
        className="container"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h2 className="resume-header">Experience</h2>
        <div className="experience">
          <div className="resume-list">
            <label className="resume-date">Oct 2022 - Present</label>
            <label className="resume-date">(Full-time)</label>
          </div>
          <div className="resume-lists">
            <label className="FED">
              Front-end Developer{" "}
              <span>at Rareket Technology Solution (Lagos, Nigeria)</span>{" "}
            </label>
            <ul>
              <div className="title">
                Assigned to develop frontend of a web3 application which inlcude
                features such as:
              </div>
              <li>
                Built connect wallet modal to interact with the Blockchain smart
                contracts like Ethereum and Polygon.
              </li>
              <li>
                Built Explore page that shows collections of an Artist NFTs.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <div className="resume-list">
            <label className="resume-date">Feb 2022 - Jun 2022</label>
            <label className="resume-date">(Full-time)</label>
          </div>
          <div className="resume-lists">
            <label className="FED">
              Front-end Developer <span>at Libre Defi (Ontario, Canada)</span>{" "}
            </label>
            <ul>
              <li>
                Assigned to develop a landing page for Libre-Farm NFT site.
                Completed this project using HTML, and CSS framework Bootstrap.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="resume-header">Education</h2>
        <div className="education">
          <div className="resume-list">
            <label className="resume-date">Mar, 2015 - October, 2018</label>
          </div>
          <div className="resume-list">
            <label className="FED">
              B.Sc. in Physics{" "}
              <span>
                at University of Uyo, <br /> (Akwa-Ibom, Nigeria)
              </span>
            </label>
          </div>
        </div>

        <h2 className="resume-header">Skills and Tech Stack</h2>
        <div className=" stack">
          <ul>
            <li>
              CSS libraries and tools including Tailwind CSS, Headless UI, Daisy UI, Bootstrap, Sass.
            </li>
            <li>JavaScript frameworks such as React.js.</li>
            <li>JavaScript meta frameworks such as Next.js.</li>
            <li>Design tools like Figma.</li>
          </ul>
        </div>

        <h2 className="resume-header">Contact Information</h2>
        <div className="contact">
          <ul className="pb-6">
            <li>
              Email:{" "}
              <span>
                <a href="mailto:ehmaessien@gmail.com">ehmaessien@gmail.com</a>
              </span>
            </li>
            <li>
              Twitter:{" "}
              <span>
                <a href="https://twitter.com/ehmaessieen">@ehmaessieen</a>
              </span>
            </li>
            <li>
              LinkedIn:{" "}
              <span>
                <a href="https://linkedin.com/in/ehmaessien">@ehmaessien</a>
              </span>
            </li>
            <li>
              Github:{" "}
              <span>
                <a href="https://github.com/ehma90">@ehma90</a>
              </span>
            </li>
            <li>
              Telegram:{" "}
              <span>
                <a href="https://t.me/ehma90">@ehma90</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
