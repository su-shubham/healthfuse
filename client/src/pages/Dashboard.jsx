import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { tipping } from "../assets";

const Doctor = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardCard />

        <div class="flex justify-center items-center  mt-5">
          <div class="block max-w-sm p-6 border border-gray-400 bg-orange-50 shadow-lg shadow-orange-600 hover:shadow-orange-700 rounded-lg transition-all ease-in-out duration-800">
            <img src={tipping} class="mx-auto h-40 w-40" />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-orange-600">
              Health Tips !
            </h5>
            <p class="font-normal text-gray-600 text-center">
              Take breaks from sitting and move around every hour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
