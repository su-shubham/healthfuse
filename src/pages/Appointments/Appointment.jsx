import React, { useState } from "react";
import { Sidebar } from "../../components";
import AppointmentsDetails from "../../components/AppointmentsDetails";

const Appointments = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-wrap justify-center gap-4 mx-10">
        <AppointmentsDetails/>
      </div>
    </div>
  );
};

export default Appointments;
