import React from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, Home, Doctor, CreateCampaign } from "./pages";
import Appointment from "./pages/Appointments/Appointment";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#ffeddb] min-h-screen flex flex-row">


      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/chat" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/community" element={<Appointment />} />
          <Route path="/about" element={<Appointment />} />
          <Route path="/logout" element={<Appointment />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
