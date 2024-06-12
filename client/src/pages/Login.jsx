import React from "react";
import { useState } from "react";
import {useFileHandler, useInputValidation} from "6pp"

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const email = useInputValidation("");
  const password = useInputValidation("");

  const [avatarImg, setAvatarImg] = useState();

  const toggleLogin = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };
  const changeAvatarImage = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setAvatarImg(file);
  }
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
      />
      {isLogin ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
          <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
              Login To Your Account
            </div>
            <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
              <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>Login with Facebook</span>
            </button>
            <div className="relative mt-10 h-px bg-gray-300">
              <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                  Or Login With Email
                </span>
              </div>
            </div>
            <div className="mt-10">
              <form action="#">
                <div className="flex flex-col mb-6">
                  <label
                    for="email"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    E-Mail Address:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="E-Mail Address"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    for="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      required
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <a
                      href="#"
                      className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>

                <div className="flex w-full">
                  <button
                    type="submit"
                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  >
                    <span className="mr-2 uppercase">Login</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-6">
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
              >
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </span>
                <span onClick={toggleLogin} className="ml-2">
                  You don't have an account?
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // Signup Page

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
          <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
              Create Your Account
            </div>
            <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
              <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>Signup with Facebook</span>
            </button>
            <div className="relative mt-10 h-px bg-gray-300">
              <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                  Or Signup With Email
                </span>
              </div>
            </div>
            <div
              className="p-8 flex flex-col justify-center items-center bg-white h-18"
            >
              <label className="w-[100px] h-[100px] md:w-[100px] grid grid-cols-1 border border-gray-300 bg-gray-100 rounded-[100px]">
                {
                  avatarImg ? (<img className="w-[100px] h-[100px] rounded-[100px]" src={URL.createObjectURL(avatarImg)}/>) :
                  (<div className="ml-5 mt-5">
                  <span className="text-gray-400 opacity-75">
                    <svg
                      className="w-14 h-14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="0.7"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </span>
                </div>)
                }
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  onChange={changeAvatarImage}
                  accept="image/png, image/jpg, image/jpeg"
                  type="file"
                />
              </label>
            </div>
            <div className="">
              <form action="#">
                <div className="flex flex-col mb-6">
                  <label
                    for="email"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Name:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M18 9v3m0 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={name.value}
                      onChange={name.changeHandler}
                      required
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    for="email"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    E-Mail Address:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email.value}
                      onChange={email.changeHandler}
                      required
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="E-Mail Address"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-14">
                  <label
                    for="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password.value}
                      onChange={password.changeHandler}
                      required
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  >
                    <span className="mr-2 uppercase">Signup</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-6">
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
              >
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 9v3m0 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </span>
                <span onClick={toggleLogin} className="ml-2">
                  Go to Login
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
