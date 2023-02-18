import React from "react";
import Fade from "react-reveal/Fade";

const Company = ({ company, handleDetails }) => {
  const { company_name, company_image } = company;
  return (
    <Fade bottom>
      <div className="card w-96 glass">
        <figure className="h-60">
          <img className="h-full" src={company_image} alt="company!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{company_name}</h2>
          <div className="card-actions pt-10">
            <button
              onClick={handleDetails}
              className="btn btn-cline-neutral normal-case text-white w-full rounded-none "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Company;
