import React from "react";
import { completed, user, calendar } from "../assets";

const Timeline = () => {
  return (
    <div className="">
      <div className="text-center max-w-screen-lg mx-auto m-36">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">
          Process of booking an appointment
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg">
          Step by Step approach can guide how to book an appointment
        </p>
        <div className="flex">
        <ol className="flex justify-center mx-auto">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-20 h-20 bg-orange-200 rounded-full ring-0 ring-white shrink-0">
                <img
                  src={user}
                  className="w-10 h-10 text-orange-200"
                  alt="User icon"
                />
              </div>
              <div className="hidden sm:flex w-full items-center bg-orange-500 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8 ">
              <h3 className="text-lg font-semibold text-orange-800">
                Register | Login
              </h3>
              <p className="text-base font-normal text-gray-500">
                Login with your account and go to Doctors Page
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-20 h-20 bg-orange-200 rounded-full ring-0 ring-white shrink-0">
                <img
                  src={calendar}
                  className="w-10 h-10 text-orange-200"
                  alt="Calendar icon"
                />
              </div>
              <div className="hidden sm:flex w-full bg-orange-500 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-orange-800">
                Book an appointment
              </h3>
              <p className="text-base font-normal text-gray-500">
                Choose various kinds of listed services.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-20 h-20 bg-orange-200 rounded-full ring-0 ring-white shrink-0">
                <img
                  src={completed}
                  className="w-10 h-10"
                  alt="Completed icon"
                />
              </div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-orange-800">
                Process done 🎉
              </h3>
              <p className="text-base font-normal text-gray-500">
                Next process will be follow up doctor chats.
              </p>
            </div>
          </li>
        </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
