import React, { useContext } from "react";
import { Context } from "../lib/contextapi";

const Balance = () => {
  const { balance } = useContext(Context);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 flex items-center justify-between shadow-sm">
      
      {/* Left: Balance Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            ₹
          </div>
          <h2 className="text-lg font-semibold text-white">Your Balance</h2>
        </div>

        <p className="text-3xl font-bold text-white tracking-tight">
          ₹{balance.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Right: Status */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 px-2 py-1 bg-green-900 text-green-300 text-xs font-medium rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          Active
        </div>

        <div className="w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center rotate-45">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Balance;
