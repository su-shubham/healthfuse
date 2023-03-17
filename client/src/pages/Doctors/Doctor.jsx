import React from "react";
import SearchBar from "../../components/SearchBar";
import {
  CustomButton,
  DisplayCampaigns,
  DoctorsCard,
  Sidebar,
} from "../../components";
import CampaignDetails from "../CampaignDetails";

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
