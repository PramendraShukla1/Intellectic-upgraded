import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword( auth, email, password)
      .then(()=>{
        navigate('/')
      }
       
      )
      .catch((error) => {
        console.log(error)
        setError(true);
       
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="flex justify-center">
        <img src={logo} className="lg:h-14 lg:w-auto h-10" alt="" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
          Let's Get Started
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full shadow-xl sm:max-w-md px-6 lg:px-0">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) =>
                  setEmail(e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                   setPassword(e.target.value)
                  }
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLoginSubmit}
              >
                Log in
              </button>
            </div>
            <div className="text-lg flex justify-center text-red-600">
              {error && <p>Wrong Email or Password</p>}
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">Or</span>
              </div>
            </div>
            <div className="flex justify-center mt-3 text-lg font-semibold hover:text-indigo-600">
              <Link to={"/register"}>Don't have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
