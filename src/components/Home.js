import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import navlogo from "../images/navlogo.png";
import { TiSocialGooglePlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/AadharPage");
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full fixed top-0 left-0 bg-blue-700 h-[80px]">
        <div className="flex justify-between mx-8 items-center">
          <p className="text-4xl text-white">
            Sign document using{" "}
            <span className="text-xl md:text-xl sm:text-lg">
              sanket@digio.in
            </span>
          </p>
          <div>
            <img
              src={navlogo}
              alt="Nav logo"
              className=" h-[90px] bg-white border border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* main div */}
      <div className="flex flex-col h-[100vh] w-full justify-center items-center">
        <div className="flex flex-col mb-8 items-center">
          <p className="text-lg text-gray-700">sanket@digio.in uses Gmail?</p>
          <p className="text-lg text-gray-700">login using google</p>
          <div className="mt-6">
            <button className="h-[50px] w-[150px] flex text-center items-center justify-center bg-red-600 text-white rounded-md">
              <TiSocialGooglePlus className="text-3xl" />
              Google
            </button>
          </div>
        </div>
        <div className="w-[600px] flex flex-row justify-center items-center mb-8">
          <hr class="w-1/3 mr-4 border-1 border-gray-400" />
          <span class="text-xl text-gray-900 uppercase">or</span>
          <hr class="w-1/3 ml-4 border-1 border-gray-400" />
        </div>

        <div className="flex flex-col w-[380px]">
          <p className="text-lg text-gray-900 mb-1 text-start">
            Proceed with your email address
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-3 w-full">
              <input
                type="email"
                className="peer m-0 block h-[58px] w-full rounded-md border-2 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 placeholder:text-gray-500 focus:border-primary   focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary"
                id="floatingInput"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <p className="text-center text-gray-600">
                By continuing, I confirm to the{" "}
                <span className="text-gray-900 cursor-pointer">
                  {" "}
                  Terms and Service
                </span>{" "}
                and{" "}
                <span className="text-gray-900 cursor-pointer">
                  Privacy Policy{" "}
                </span>
                of{" "}
                <a
                  href="https://www.digio.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  Digio.in
                </a>{" "}
              </p>
              <button
                disabled={!email}
                type="submit"
                className="mt-4 h-[50px] w-full flex text-center items-center justify-center disabled:bg-blue-300 bg-blue-700 text-lg text-white uppercase"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <div className="flex  fixed bottom-0 justify-center w-full p-2 text-sm bg-white text-white border border-t-1">
        <div className="flex justify-between w-full">
          <div className="flex flex-row">
            <img
              src={logo}
              alt="Nav logo"
              className=" h-[40px] bg-white border border-blue-500 mr-2"
            />
            <div className="flex flex-col text-start">
              <p className="text-gray-600">Powered by</p>
              <p>
                <a
                  href="https://www.digio.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  www.digio.in
                </a>
              </p>
            </div>
          </div>
          <div className="mx-4">
            <p className="text-xl text-gray-700 text-center">
              <span className="text-2xl text-gray-900 font-medium">1</span>/3
              steps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
