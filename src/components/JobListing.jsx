/* eslint-disable react/prop-types */
// import jobs from "../jobs.json";

import { useState, useEffect } from "react";
import JobListingSingle from "./JobListingSingle";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/view");
        const data = await res.json();
        setJobs(data.jobs);
      } catch (error) {
        console.log("Fetching Data Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-[#9b59b6] mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <center>
            <Spinner loading={loading} />
          </center>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => {
              return <JobListingSingle key={job._id} job={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
