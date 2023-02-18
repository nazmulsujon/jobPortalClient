import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorimg from "../../assets/error.webp";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center bg-errorpage">
      <div className="">
        <img src={errorimg} alt="errorimg" className="mt-10 mx-auto w-72" />
      </div>
      <div className="error-info">
        <h1 className="text-secondary font-bold text-3xl mb-2">Oops!</h1>

        <p className="text-error">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-secondary w-50 mx-auto d-none d-md-block">
          The page you are looking for no longer exists.
          <br /> Perhaps you can return back to the site's homepage and see if you can find what you are looking for.
        </p>
      </div>

      <p className="my-5">
        Please Go Back
        <Link className="font-bold mx-2 text-blue-600 border-b-2 " to={"/"}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
