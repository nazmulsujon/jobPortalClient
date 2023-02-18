import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AllExperiencedJobs from "../../Pages/ExperiencedJobs/AllExperiencedJobs";
import AllFresherJobs from "../../Pages/FresherJobs/AllFresherJobs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Register/Login/Login";
import SignUp from "../../Pages/Register/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allFresherJob",
        element: <AllFresherJobs></AllFresherJobs>,
      },
      {
        path: "/allExperiencedJob",
        element: <AllExperiencedJobs></AllExperiencedJobs>,
      },
    ],
  },
]);
