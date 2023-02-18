import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import FresherJob from "./FresherJob";

const FresherJobs = () => {
  const [fresherJobs, setFresherJobs] = useState([]);

  const limFresherJobs = fresherJobs.slice(0, 6);
  //   console.log(limFresherJobs);

  useEffect(() => {
    fetch(`https://sunshine-task-server-nazmul68.vercel.app/fresherJobs`)
      .then((res) => res.json())
      .then((data) => setFresherJobs(data));
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-3xl font-bold font-sans text-center mb-10">
        Fresher <span className="text-primary"> Jobs</span>
      </h1>
      {limFresherJobs.length === 0 ? (
        <div className="text-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div>
          {limFresherJobs.map((limFresherJob) => (
            <FresherJob key={limFresherJob._id} limFresherJob={limFresherJob}></FresherJob>
          ))}
        </div>
      )}
      <div className="text-center w-[200px] mx-auto">
        <Link
          to="/allFresherJob"
          className="btn btn-primary normal-case my-10 text-white w-full font-thin text-xl rounded-none"
        >
          see all jobs
        </Link>
      </div>
    </section>
  );
};

export default FresherJobs;
