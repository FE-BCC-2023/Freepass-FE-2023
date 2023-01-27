import React, { useContext } from "react";
import { ThemeContext } from "../../App.js";
import { GlobalProvider } from "../../GlobalContext/index.js";

const LandingPage = () => {
  const [theme] = useContext(ThemeContext);
  const {
    dataLogin,
    dataRegister,
    isLoginPage,
    setIsLoginPage,
    handleInputLogin,
    handleInputRegister,
    register,
    handleTheme,
    failedLogin,
    login,
  } = useContext(GlobalProvider);
  return (
    <div className="h-screen bg-purple-700 dark:bg-slate-600 w-screen p-8">
      <div className="bg-slate-200 dark:bg-slate-800 h-full rounded-3xl p-12 px-8 sm:px-20 text-xs sm:text-sm">
        <div className="flex justify-between items-center">
          <div className="pl-24 text-3xl font-normal hidden sm:flex ">
            Task Manager
          </div>
          <div className="flex items-center">
            <button
              onClick={handleTheme}
              className="hover:bg-blue-100 hover:text-blue-800 mr-4 font-medium duration-200 rounded-full p-2"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                setIsLoginPage(true);
              }}
              className=" mr-4 rounded-lg hover:scale-110 duration-300 shadow-md dark:bg-purple-700 bg-purple-400 px-3 p-2"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsLoginPage(false);
              }}
              className=" rounded-lg hover:scale-110 duration-300 shadow-md dark:bg-purple-700 bg-purple-400 px-3 p-2"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse h-full">
          {isLoginPage ? (
            <div className="bg-white  dark:bg-slate-600 rounded-3xl p-8 h-96 mt-12 w-full sm:w-4/12 text-slate-800 dark:text-white">
              <div className="text-xl mb-4">Welcome Back...</div>
              <div>
                <form
                  className="flex flex-col gap-2 dark:text-slate-100 text-slate-800"
                  onSubmit={login}
                >
                  <div className="relative createInput mb-2">
                    <input
                      type="text"
                      onChange={handleInputLogin}
                      value={dataLogin.email}
                      required
                      name="email"
                      className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                    />
                    <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300  text-gray-500 font-normal">
                      Email
                    </span>
                  </div>
                  <div className="relative createInput mb-2">
                    <input
                      type="password"
                      onChange={handleInputLogin}
                      value={dataLogin.password}
                      required
                      name="password"
                      className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                    />
                    <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                      Password
                    </span>
                  </div>
                  <div className="text-slate-700">{failedLogin?.msg}</div>
                  <div>
                    <button
                      type="submit"
                      className=" hover:scale-110 duration-300 shadow-md bg-slate-200 p-3 px-4 text-slate-900 rounded-lg"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white  dark:bg-slate-600 rounded-3xl p-8 h-96 mt-12 w-full sm:w-4/12 dark:text-slate-100 text-slate-900">
              <div className="text-xl mb-4">Come Join</div>
              <div>
                <form
                  className="flex flex-col gap-2 dark:text-slate-100 text-slate-900"
                  onSubmit={register}
                >
                  <div className="flex flex-row justify-between w-full gap-2">
                    <div className="relative createInput mb-2">
                      <input
                        type="text"
                        onChange={handleInputRegister}
                        value={dataRegister.firstName}
                        required
                        name="firstName"
                        className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                      />
                      <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                        First Name
                      </span>
                    </div>
                    <div className="relative createInput mb-2">
                      <input
                        type="text"
                        onChange={handleInputRegister}
                        value={dataRegister.lastName}
                        required
                        name="lastName"
                        className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                      />
                      <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                        Last Name
                      </span>
                    </div>
                  </div>
                  <div className="relative createInput mb-2">
                    <input
                      type="text"
                      onChange={handleInputRegister}
                      value={dataRegister.email}
                      required
                      name="email"
                      className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                    />
                    <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                      Email
                    </span>
                  </div>
                  <div className="relative createInput mb-2">
                    <input
                      type="password"
                      onChange={handleInputRegister}
                      value={dataRegister.password}
                      required
                      name="password"
                      className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                    />
                    <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                      Password
                    </span>
                  </div>
                  <div className="flex flex-row justify-between w-full gap-2">
                    <div className="relative createInput mb-2">
                      <input
                        type="text"
                        onChange={handleInputRegister}
                        value={dataRegister.location}
                        required
                        name="location"
                        className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                      />
                      <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                        Location
                      </span>
                    </div>
                    <div className="relative createInput mb-2">
                      <input
                        type="text"
                        onChange={handleInputRegister}
                        value={dataRegister.occupation}
                        required
                        name="occupation"
                        className="relative focus:outline-none bg-transparent h-10 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-gray-400 rounded-md py-1 px-4 w-full"
                      />
                      <span className="absolute bg-white dark:bg-slate-600 dark:text-slate-100 left-0 mt-3 ml-4 text-sm duration-300 text-gray-500 font-normal">
                        Occupation
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" hover:scale-110 duration-300 shadow-md bg-slate-200 p-3 px-4 text-slate-900 rounded-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="hidden sm:flex  w-8/12 relative">
            <div className="bg-red-200 absolute top-0 left-32 overflow-hidden h-40 w-64 mt-12 rounded-2xl">
              <div className="h-8 bg-white"></div>
            </div>
            <div className="bg-red-200 absolute left-64 top-20 overflow-hidden h-40 w-64 mt-12 rounded-2xl">
              <div className="h-8 bg-white"></div>
            </div>
            <div className="bg-red-200 absolute left-24 bottom-40 overflow-hidden h-40 w-64 mt-12 rounded-2xl">
              <div className="h-8 bg-white"></div>
            </div>
            <div className="bg-red-200 absolute right-24 bottom-40 overflow-hidden h-40 w-64 mt-12 rounded-2xl">
              <div className="h-8 bg-white"></div>
            </div>
            <div className="text-lg absolute bottom-12 left-0">
              <div className="font-bold">
                Organize your work and life, finally.
              </div>
              <div>
                Become focused, organized, and calm with Task Manager. Add your
                tasks. Organize your life. Achieve more every day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
