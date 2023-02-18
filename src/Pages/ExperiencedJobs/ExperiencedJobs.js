import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ExperiencedJob from "./ExperiencedJob";

const ExperiencedJobs = () => {
  const [experiencedJobs, setExperiencedJobs] = useState([]);

  const limExperiencedJobs = experiencedJobs.slice(0, 6);
  console.log(limExperiencedJobs);

  useEffect(() => {
    fetch(`https://sunshine-task-server-nazmul68.vercel.app/experiencedJobs`)
      .then((res) => res.json())
      .then((data) => setExperiencedJobs(data));
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-3xl font-bold font-sans text-center mb-10">
        Experienced <span className="text-primary"> Jobs</span>
      </h1>
      {limExperiencedJobs.length === 0 ? (
        <div>
          <Spinner></Spinner>
        </div>
      ) : (
        <div>
          {limExperiencedJobs.map((limExperiencedJob) => (
            <ExperiencedJob key={limExperiencedJob._id} limExperiencedJob={limExperiencedJob}></ExperiencedJob>
          ))}
        </div>
      )}

      <div className="text-center w-[200px] mx-auto">
        <Link
          to="/allExperiencedJob"
          className="btn btn-primary normal-case my-10 text-white w-full font-thin text-xl rounded-none"
        >
          see all jobs
        </Link>
      </div>
    </section>
  );
};

export default ExperiencedJobs;
