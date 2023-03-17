import React from "react";
import CustomButton from "./CustomButton";

const DoctorsCard = () => {
  return (
    <div className="flex space-x-7 px-28 mt-4">
      <div className="grid w-1/2 px-16 space-y-10">
        <div className=" h-32 bg-orange-50 p-3 border-l-8 border-orange-400   rounded-r-lg  hover:border-orange-500 hover:shadow-lg hover:shadow-orange-300 transition ease-in-out duration-700 ">
          <h5 className="mb-2 text-md  font-extrabold text-orange-400 uppercase font-epilogue">
            Next Appointments
          </h5>
          <p className="font-normal text-2xl text-gray-700 font-epilogue">
            June 12, Noida
          </p>
        </div>
        <div className=" h-32 bg-orange-50 p-3 border-l-8 border-emerald-400 rounded-r-lg  hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-300 transition ease-in-out duration-700 ">
          <h5 className="mb-2 text-md  font-extrabold text-emerald-400 uppercase">
            Savings
          </h5>
          <p className="font-normal text-2xl text-gray-700">200$</p>
        </div>
      </div>
      <div className="grid w-1/2 px-16 space-y-10">
        <div className=" h-32 bg-orange-50 p-3  border-l-8 border-blue-400 rounded-r-lg  hover:border-blue-500 hover:shadow-lg hover:shadow-blue-300 transition ease-in-out duration-700 ">
          {" "}
          <h5 className="mb-2 text-md  font-extrabold text-blue-400 uppercase">
            Diet{" "}
          </h5>
          <p className="font-normal text-2xl text-gray-700">
            800 Calories/ Veg / 2 Tablets
          </p>
        </div>
        <div className=" h-32 bg-orange-50 p-3  border-l-8 border-red-400  rounded-r-lg  hover:border-red-500 hover:shadow-lg hover:shadow-red-300 transition ease-in-out duration-700 ">
          {" "}
          <h5 className="mb-2 text-md  font-extrabold text-red-400 uppercase">
            Need Help{" "}
          </h5>
          <CustomButton
            btnType="button"
            title="Chat Now"
            styles="w-32  bg-red-400  hover:bg-red-500"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
