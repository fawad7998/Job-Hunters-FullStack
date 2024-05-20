/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { FaArrowLeft } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobDetailsPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const { job } = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job!");
    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job deleted successfully!");
    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="[#9b59b6] hover:text-[#8e44ad] flex items-center"
          >
            <FaArrowLeft className="mr-2 " /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <IoLocation className="text-lg text-orange-700 mt-1 mr-2" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-[#8e44ad] text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-[#8e44ad] text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/*<!-- Sidebar -->*/}
            <aside>
              {/*<!-- Company Info -->*/}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company[0].name}</h2>

                <p className="my-2">{job.company[0].description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company[0].contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company[0].contactPhone}
                </p>
              </div>

              {/*<!-- Manage -->*/}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job._id}`}
                  className="bg-[#9b59b6] hover:bg-[#8e44ad] text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobloader = async ({ params }) => {
  const res = await fetch(`/api/view/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobDetailsPage as default, jobloader };

/*
useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/view/${id}`);
        const data = await res.json();
        setJob(data.job);
      } catch (error) {
        console.log(error, "Fetching Data Error");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);
*/
