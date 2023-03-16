import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Testomonial from "../components/Testomonial";

const Doctor = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardCard />
        <Testomonial />
      </div>
    </div>
  );
};

export default Doctor;
