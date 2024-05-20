import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobDetailsPage, { jobloader } from "./pages/JobDetailsPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { toast } from "react-toastify";

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    try {
      await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
    } catch (err) {
      toast.error("Could not create Job!", err);
    }
    return;
  };

  // Delete Job

  const deleteJob = async (id) => {
    try {
      await fetch(`/api/remove/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      toast.error("Could not Delete Job!", err);
    }
    return;
  };

  // Update Job

  const updateJob = async (job) => {
    try {
      await fetch(`/api/update/${job.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
    } catch (err) {
      toast.error("Could not Update Job!", err);
    }

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobloader}
        />
        <Route
          path="/JobDetails/:id"
          element={<JobDetailsPage deleteJob={deleteJob} />}
          loader={jobloader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
