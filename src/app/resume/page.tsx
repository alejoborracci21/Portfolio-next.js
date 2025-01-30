import React from "react";
import Experience from "../components/experience/experience";
import jobsData from '../components/experience/jobs/jobs.json';

const ResumePage = () => {
  return (
    <div className="h-[80vh] mt-10 mb-10">
      <Experience jobs={jobsData} />
    </div>
  );
}

export default ResumePage;
