import React from "react";
import { useContext } from "react";
import { Context } from "../lib/contextapi";


const Balance = () => {
  const { balance } = useContext(Context);

  return (
    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-xl shadow-sm border border-gray-100/50">
      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        Your Balance
      </div>
      <div className="text-xl font-semibold text-gray-800">
        ₹{balance.toLocaleString("en-IN")}
      </div>
    </div>
  );
};

export default Balance;