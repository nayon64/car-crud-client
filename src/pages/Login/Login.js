import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate=useNavigate()
  const from= location?.state?.form?.pathname || "/"


	const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        const currentUser = {
          user:user.email
        }
        form.reset()
        alert("successfully log in")
        fetch("https://car-crud-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem("car-token", data.token)
            navigate(from, { replace: true });
        })
 
      })
    .then(err=>console.error(err))
	}
  return (
    <div className="hero py-10 my-10 ">
      <div className="hero-content grid grid-cols-2">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl text-center font-bold text-gray-700">
              Login{" "}
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#h" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <h1 className="text-center mb-6">
            You are new an car crud{" "}
            <Link
              to="/register"
              className="text-rose-600 font-semibold text-2xl"
            >
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
