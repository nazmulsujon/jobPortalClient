import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaBriefcase } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AllFresherJobs = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      toast.success("Application starts soon!");
    }
  };
  const [allFresherJobs, setAllFresherJobs] = useState([]);

  useEffect(() => {
    fetch(`https://sunshine-task-server-nazmul68.vercel.app/fresherJobs`)
      .then((res) => res.json())
      .then((data) => setAllFresherJobs(data));
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold font-sans text-center my-10">
        <Link to={"/"}>Home</Link> / All Fresher <span className="text-primary"> Jobs</span>
      </h1>
      <div>
        {allFresherJobs.length === 0 ? (
          <div>
            <Spinner></Spinner>
          </div>
        ) : (
          allFresherJobs.map((allFresherJob) => (
            <div>
              <Fade left>
                <div className="overflow-x-auto shadow-lg rounded-md lg:w-4/6 mx-5 lg:mx-auto py-5 my-2">
                  <table className="table w-full ">
                    <tbody>
                      <tr>
                        <td>
                          <div className=" text-left">
                            <div className="flex items-center">
                              <FaBriefcase className="text-xl text-primary" />
                              <h2 className="text-2xl font-sans ml-2">{allFresherJob?.position}</h2>
                            </div>
                            <div className="font-serif pt-5">
                              <h2 className="pb-2 flex items-center">{allFresherJob?.company_name}</h2>
                              <h2>{allFresherJob?.job_location}</h2>
                            </div>
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
          ))
        )}
      </div>
    </section>
  );
};

export default AllFresherJobs;
