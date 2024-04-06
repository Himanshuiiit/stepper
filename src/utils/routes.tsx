import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Task from "../pages/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/task/:id",
    element: <Task />,
  },
  {
    path: "*",
    element: <Dashboard />,
  },
]);

export default router;
