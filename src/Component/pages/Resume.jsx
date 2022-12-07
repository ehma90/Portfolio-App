import "../../style/resume.css";

function Resume() {
  return (
    <div>
      <div className="my-[100px]">
        <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-md md:text-2xl">Software Developer</p>
        <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[148px] md:w-[221px] border border-green-900"></div>
      </div>

      <div className="container mx-auto">
        <h1 className="experience-header">Experience</h1>
        <div className="experience">
          <div className="resume-list">
            <label className="experience-date">Oct 2022 - Present</label>
            <label className="experience-date">Full-time</label>
          </div>
          <div className="resume-list">
            <label className="FED">
              Front-end Developer <span>at Rareket Technology Solution (Lagos, Nigeria)</span>{" "}
            </label>
            <ul>
              <div className="title">Assigned to develop frontend of a web3 application which inlcude features such as:</div>
              <li>
              Connect wallet modal to interact with the blockchain services
              </li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <div className="resume-list">
            <label className="experience-date">Feb 2022 - Jun 2022</label>
            <label className="experience-date">Full-time</label>
          </div>
          <div className="resume-list">
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
      </div>
    </div>
  );
}

export default Resume;
