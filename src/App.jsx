import React from "react";
import { Route, Routes } from "react-router-dom";
import { Doctor } from "./pages";
import Appointment from "./pages/Appointments/Appointment";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#ffeddb] min-h-screen flex flex-row">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/appointments" element={<Appointment />} />
            {/* <Route path="/chat" element={<ChatBot />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/community" element={<Appointment />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </div>
  );
};
export default App;
