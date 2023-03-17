import React, { useEffect, useState } from "react";

import { docs, tagType, thirdweb } from "../assets";
import { daysLeft } from "../utils";

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
  }, []);

  return (
    <>
      {doctors.map((doctor) => (
        <div
          className="sm:w-[288px] w-full  px-6 rounded-[15px] bg-[#FFD495] cursor-pointer"
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
              </p>
            </div>

            <div className="block">
              <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
                {doctor.name}
              </h3>
              <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
                {doctor.desc}
              </p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
              <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
                  {amountCollected}
                </h4>
                <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
                  Raised of {target}
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
                  {remainingDays}
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorsCard;

{
  /* <div>
    <h2>List of Doctors:</h2>
    <ul>
    {doctors.length > 0 ? (
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
    </ul>
  </div> */
}
