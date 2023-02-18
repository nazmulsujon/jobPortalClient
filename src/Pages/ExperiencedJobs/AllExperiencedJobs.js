import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaBriefcase } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AllExperiencedJobs = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [experiencedJobs, setExperiencedJobs] = useState([]);

  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      toast.success("Application starts soon!");
    }
  };

  useEffect(() => {
    fetch(`https://sunshine-task-server-nazmul68.vercel.app/experiencedJobs`)
      .then((res) => res.json())
      .then((data) => setExperiencedJobs(data));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold font-sans text-center my-10">
        <Link to={"/"}>Home</Link> / All Experienced <span className="text-primary"> Jobs</span>
      </h1>
      <div></div>
      {experiencedJobs &&
        experiencedJobs.map((experiencedJob) => (
          <div>
            <Fade left>
              <div className="overflow-x-auto shadow-lg rounded-md lg:w-4/6 mx-5 lg:mx-auto py-5 my-2 ">
                <table className="table w-full ">
                  <tbody>
                    <tr>
                      <td>
                        <div className=" text-left">
                          <div className="flex items-center">
                            <FaBriefcase className="text-xl text-primary" />
                            <h2 className="text-2xl font-sans ml-2">{experiencedJob?.position}</h2>
                          </div>
                          <div className="font-serif pt-5">
                            <h2 className="pb-2 flex items-center">{experiencedJob?.company_name}</h2>
                            <h2>{experiencedJob?.job_location}</h2>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex items-center mask mask-diamond  w-32">
                          <img src={experiencedJob?.company_logo} alt="logoimg" className="" />
                        </div>
                      </td>

                      <td>
                        <div className="text-right">
                          <button onClick={handleApply} className="btn btn-cline-neutral normal-case rounded-none">
                            Apply Job
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Fade>
          </div>
        ))}
    </section>
  );
};

export default AllExperiencedJobs;
