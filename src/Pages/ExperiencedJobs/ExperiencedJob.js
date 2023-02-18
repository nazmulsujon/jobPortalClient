import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaBriefcase } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ExperiencedJob = ({ limExperiencedJob }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      toast.success("Application starts soon!");
    }
  };
  const { company_name, job_location, position, company_logo } = limExperiencedJob;
  //   console.log(company_name, job_location, position);
  return (
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
                      <h2 className="text-2xl font-sans ml-2">{position}</h2>
                    </div>
                    <div className="font-serif pt-5">
                      <h2 className="pb-2 flex items-center">{company_name}</h2>
                      <h2>{job_location}</h2>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="flex items-center mask mask-diamond  w-32">
                    <img src={company_logo} alt="logoimg" className="" />
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
  );
};

export default ExperiencedJob;
