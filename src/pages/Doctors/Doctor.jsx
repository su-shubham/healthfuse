import React from "react";
import { DoctorsCard, Sidebar } from "../../components";

const Doctor = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-wrap justify-center gap-4 mx-10">
        <DoctorsCard />
      </div>
    </div>
  );
};

export default Doctor;
