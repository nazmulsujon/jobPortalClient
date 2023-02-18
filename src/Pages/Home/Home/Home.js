import React from "react";
import ExperiencedJobs from "../../ExperiencedJobs/ExperiencedJobs";
import FresherJobs from "../../FresherJobs/FresherJobs";
import TopItCompanies from "../../TopItCompanies/TopItCompanies";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FresherJobs></FresherJobs>
      <ExperiencedJobs></ExperiencedJobs>
      <TopItCompanies></TopItCompanies>
    </div>
  );
};

export default Home;
