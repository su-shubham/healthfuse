import React, { useState } from "react";
import SearchBar from "./SearchBar";

const AppointmentsDetails = () => {
  const [appointments, setAppointments] = useState();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
        <h2 className="text-3xl text-gray-400  md:mb-0">Appointments</h2>
      <div className="flex">
      <SearchBar
        className="w-full "
        id="searchAppointments"
        label="Search Appointments"
        value={appointments}
        onChange={(event) => setAppointments(event.target.value)}
        />
        </div>
        
      </div>
    </>
  );
};

export default AppointmentsDetails;
