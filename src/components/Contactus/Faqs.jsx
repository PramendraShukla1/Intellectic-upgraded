import React from "react";
import { FcAssistant, FcBusinessman } from "react-icons/fc";

const Faqs = () => {
  return (
    <div className="py-4 ">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center mt-7">
         
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h3>
        </div>
        <div className="mt-20">
          <ul className="">
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                  <FcBusinessman size={30} />
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    How do I get started with your software development
                    services?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-cyan-100 text-black font-sans p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                  Getting started is easy. Simply reach out to us through our services page, and our team will get in touch to discuss your project requirements, goals, and next steps.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                <FcAssistant size={30}/>
                </div>
              </div>
            </li>


            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                  <FcBusinessman size={30} />
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                  What is your development process like?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-cyan-100 text-black font-sans p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                  Our development process is agile and collaborative. We involve you throughout the development lifecycle, from requirements gathering and design to development, testing, and deployment, ensuring your vision is realized.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                <FcAssistant size={30}/>
                </div>
              </div>
            </li>


            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                  <FcBusinessman size={30} />
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                  What technologies do you specialize in?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-cyan-100 text-black font-sans p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                  At present, our focus lies exclusively on the development of projects using JavaScript and its associated frameworks.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                <FcAssistant size={30}/>
                </div>
              </div>
            </li>


            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                  <FcBusinessman size={30} />
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                  How long does it take to develop a typical software application?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-cyan-100 text-black font-sans p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                  The development timeline varies based on the complexity of the project. We provide a detailed project timeline during the initial consultation, outlining milestones and estimated completion dates.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gray-300 text-white border-4 border-white text-xl font-semibold">
                <FcAssistant size={30}/>
                </div>
              </div>
            </li>


           
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
