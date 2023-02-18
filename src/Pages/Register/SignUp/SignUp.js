import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle, FaLock } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { MdMail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const { googleSignIn, createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data, e) => {
    // console.log(data.name, data.role);
    e.target.reset();
    setSignUpError("");
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        // updateUserProfile
        updateUserProfile(userInfo)
          .then(() => {
            console.log("update user successfully");
          })
          .catch((err) => {
            console.error(err);
          });
        // verifyEmail
        verifyEmail()
          .then(() => {
            toast.success("Please verify your email address");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        // console.log(err);
        setSignUpError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="register-bg">
      <div className="h-[700px] flex justify-center items-center">
        <div className="w-96 shadow-2xl p-5 rounded bg-slate-200">
          <h2 className="text-2xl text-center font-bold text-gray-600 mb-3">Sign Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs mx-auto ">
              <label className="label">
                <span className="label-text font-mono flex items-center">
                  <SiNamecheap className="mr-2" /> Name
                </span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered rounded"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <label role="alert" className=" text-red-600 font-mono">
                  {errors.name?.message}
                </label>
              )}
            </div>

            <div className="form-control max-w-xs mx-auto">
              <label className="label">
                <span className="label-text font-mono flex items-center">
                  {" "}
                  <MdMail className="mr-2" /> Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email Address is required" })}
                className="input input-bordered rounded"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <label role="alert" className=" text-red-600 font-mono">
                  {errors.email?.message}
                </label>
              )}
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text font-mono flex items-center">
                  <FaLock className="mr-2" />
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "Password must have uppercase, number and special characters",
                  },
                })}
                className="input input-bordered rounded"
              />
              {errors.password && (
                <label role="alert" className="text-red-600 font-mono">
                  {errors.password?.message}
                </label>
              )}
              <label className="label">
                <a href="##" className="label-text font-mono">
                  Forgot Password?
                </a>
              </label>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <input className="btn btn-accent rounded font-bold" type="submit" value="Sign Up" />
            </div>
            <div className="max-w-xs mx-auto">
              {signUpError && <p className="text-red-600 font-mono">{signUpError}</p>}
            </div>
          </form>
          <p className="max-w-xs my-2 mx-auto">
            Already have an account ? Please
            <Link to={"/login"} className="text-info font-semibold ml-2">
              Login
            </Link>{" "}
          </p>
          <div className="divider max-w-xs mx-auto">OR</div>
          <div className="max-w-xs my-2 mx-auto">
            <button className="btn btn-success btn-outline font-bold w-full rounded" onClick={handleGoogleSignIn}>
              CONTINUE WITH GOOGLE <FaGoogle className="ml-3 font-bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
