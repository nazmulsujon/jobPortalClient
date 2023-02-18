import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Company from "./Company";

const TopItCompanies = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDetails = () => {
    if (!user) {
      navigate("/login");
    } else {
      toast.success("Details add as soon!");
    }
  };

  const [topItCompanies, setTsopItCompanies] = useState([]);
  console.log(topItCompanies);

  useEffect(() => {
    fetch(`https://sunshine-task-server-nazmul68.vercel.app/topItCompanies`)
      .then((res) => res.json())
      .then((data) => setTsopItCompanies(data));
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-3xl font-bold font-sans text-center mb-10">
        Top IT <span className="text-primary"> Companies</span>
      </h1>
      {topItCompanies.length === 0 ? (
        <div>
          <Spinner> </Spinner>
        </div>
      ) : (
        <div>
          <div className="container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            {topItCompanies.map((company) => (
              <Company company={company} handleDetails={handleDetails}></Company>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TopItCompanies;
