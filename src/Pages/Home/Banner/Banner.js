import React from "react";
import job_banner from "../../../assets/job_holder.avif";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <div className="hero h-[90vh] bg-purple-200	">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="md:w-2/3 md:h-2/3">
          <img src={job_banner} alt="job_banner" className="rounded-tl-3xl rounded-br-3xl w-full" />
        </div>
        <div className="w-full text-left">
          <Fade left>
            <h1 className="text-4xl lg:text-6xl font-bold">Searching for the Job?</h1>{" "}
          </Fade>
          <Fade bottom>
            <p className="py-6 text-2xl lg:text-4xl font-bold font-mono ">
              Find the <span className="text-primary">Best Startup </span>
              <br />
              that fit to you!
            </p>
          </Fade>

          <button className="btn rounded-none btn-neutral w-94">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
