import React, { useEffect, useState } from "react";
import { docs, tagType, thirdweb } from "../assets";
import { daysLeft } from "../utils";
import Modal from "./Modal";

const DoctorsCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://getdoc.free.beeceptor.com/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, [DoctorsCard]);

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {doctors.map((doctor) => (
      <div
        className="sm:w-[288px] w-full  px-6 rounded-[15px] bg-orange-300 cursor-pointer"
        onClick={handleClick}
      >
        {/* <img
        src={doctors.specialphto}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      /> */}

        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center mb-[18px]">
            <img
              src={tagType}
              alt="tag"
              className="w-[17px] h-[17px] object-contain"
            />
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
              {doctor.speliazation}
              {/* Education */}
            </p>
          </div>

          <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-gray-600 hover:text-gray-700 text-left leading-[26px] truncate">
              {doctor.name}
              {/* Mr John Doe */}
            </h3>
            <p className="mt-[5px] font-epilogue font-normal text-gray-600 text-left leading-[18px] truncate">
              {doctor.desc}
              {/* Psychology */}
            </p>
          </div>

          <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
              <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
                {/* {amountCollected} */}10002
              </h4>
              <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
                {/* Raised of {target} */} 389
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
                {/* {remainingDays} */}23
              </h4>
              <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
                Days Left
              </p>
            </div>
          </div>

          <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
              {/* <img
              src={doctors.docphoto}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            /> */}
            </div>
            <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
              by <span className="text-[#b2b3bd]">{owner}</span>
            </p>
            <button
              className="bg-orange-400 hover:bg-orange-500 rounded-xl p-2"
              onClick={() => setIsOpen(true)}
            >
              Book Now
            </button>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          title="Book your appointments"
        >
          <form class="space-y-6" action="#">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Name :
              </label>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Services :
              </label>
            </div>
            <div className="space-x-2">
              <button
                type="submit"
                class=" text-white space-y-3 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sure !
              </button>

              <button
                onClick={handleCloseModal}
                type="submit"
                class=" text-black space-y-3 bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>
      ))} 
    </>
  );
};

export default DoctorsCard;
