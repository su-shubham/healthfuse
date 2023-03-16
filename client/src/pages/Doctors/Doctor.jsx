import React from "react";
import SearchBar from "../../components/SearchBar";
import { CustomButton, DoctorsCard } from "../../components";

const Doctor = () => {
  return (
    <div className="mt-10 text-3xl text-gray-700">
      Book a doctor appointments under 2 Minutes
      <div className="mt-10">
        <SearchBar id="searchDoctor" label="Search Doctor" />
      </div>
      <div className="mt-10">
        <DoctorsCard />
      </div>
    </div>
  );
};

export default Doctor;
