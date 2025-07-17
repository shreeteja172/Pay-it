import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 font-sans">
      <AppBar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6 transform transition-all duration-300 hover:scale-[1.005] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/10 to-blue-50/10 animate-pulse opacity-20"></div>
            <div className="relative z-10">
              <Balance />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6 transform transition-all duration-300 hover:scale-[1.005] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/10 to-blue-50/10 animate-pulse opacity-20"></div>
            <div className="relative z-10">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;