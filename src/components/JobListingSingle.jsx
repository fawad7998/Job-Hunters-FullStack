/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const JobListingSingle = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-[#9b59b6] mb-5 hover:text-[#8e44ad]"
        >
          {showFullDescription ? (
            <IoIosArrowDropup className="text-lg" />
          ) : (
            <IoIosArrowDropdown className="text-lg" />
          )}
        </button>

        <h3 className="text-[#9b59b6] mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <IoLocation className="text-lg inline mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/JobDetails/${job._id}`}
            className="h-[36px] bg-[#9b59b6] hover:bg-[#8e44ad] text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListingSingle;
