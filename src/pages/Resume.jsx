import "../style/resume.css";

function Resume() {
  return (
    <div className="px-10 md:px-0 overflow-x-hidden">
      <div
        className="my-[100px]"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-md md:text-2xl">Front-end Engineer</p>
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
            <label className="resume-date">Nov 2019 - Present</label>
            <label className="resume-date">(Part-time)</label>
          </div>
          <div className="resume-lists">
            <label className="FED">
              Front-end Engineer <span>at Protis Studios (Nigeria)</span>{" "}
            </label>
            <ul>
              <li>
                Collaborated with a colleague to develop the Protis website.
              </li>
              <li>
                Implemented optimised CSS scroll effects for animations and
                created a slug page to showcase relevant information about past
                projects undertaken by Protis.
              </li>
              <li>
                Ensured the UI closely matched the provided Figma template.
              </li>
              <li>
                Employed JavaScript, React.js, Tailwind CSS, and utilised the
                AOS package manager to successfully deliver the project.
              </li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <div className="resume-list">
            <label className="resume-date">Oct 2022 - Jan 2023</label>
            <label className="resume-date">(Full-time)</label>
          </div>
          <div className="resume-lists">
            <label className="FED">
              Front-end Engineer{" "}
              <span>at Rareket Technology Solution (South Africa)</span>{" "}
            </label>
            <ul>
              <li>
                Connect wallet modal UI to interact with the Blockchain smart
                contracts like Ethereum and Polygon.
              </li>
              <li>Explore page that shows collections of an Artist NFTs.</li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <div className="resume-list">
            <label className="resume-date">Dec 2021 - Oct 2022</label>
            <label className="resume-date">(Full-time)</label>
          </div>
          <div className="resume-lists">
            <label className="FED">
              Front-end Developer <span>at Redux Protocol (Canada)</span>{" "}
            </label>
            <ul>
              <li>
                Tasked with creating a landing page for the Libre-Farm NFT site.
              </li>
              <li>
                The landing page displayed the total number of NFTs to be minted
                and featured a countdown timer to the launch date.
              </li>
              <li>
                Completed this project using HTML, bootstrap, and Javascript.
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
            <li><span className="undeline">Programming Languages:</span> Node.js, JavaScript, TypeScript, CSS3, HTML5.</li>
            <li><span className="undeline">Frameworks:</span> Next.js, React.js, TailwindCSS, Bootstrap, DaisyUI..</li>
            <li><span className="undeline">Tools:</span> Version Control Systems, Package Managers, Github, Gitlab, Figma, Adobe XD.</li>
          </ul>
        </div>

        <h2 className="resume-header">Contact Information</h2>
        <div className="contact">
          <ul className="pb-6">
            <li>
              Email:{" "}
              <span>
                <a href="mailto:ehmaessien@gmail.com" target="_blank" rel="noreferrer">ehmaessien@gmail.com</a>
              </span>
            </li>
            <li>
              Twitter:{" "}
              <span>
                <a href="https://twitter.com/ehmaessieen" target="_blank" rel="noreferrer">@ehmaessieen</a>
              </span>
            </li>
            <li>
              LinkedIn:{" "}
              <span>
                <a href="https://linkedin.com/in/ehmaessien" target="_blank" rel="noreferrer">@ehmaessien</a>
              </span>
            </li>
            <li>
              Github:{" "}
              <span>
                <a href="https://github.com/ehma90" target="_blank" rel="noreferrer">@ehma90</a>
              </span>
            </li>
            <li>
              Telegram:{" "}
              <span>
                <a href="https://t.me/ehma90" target="_blank" rel="noreferrer">@ehma90</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
