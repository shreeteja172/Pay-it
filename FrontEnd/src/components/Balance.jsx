import React from "react";
import { useContext } from "react";
import { Context } from "../lib/contextapi";

const Balance = () => {
  const { balance } = useContext(Context);
  
  return (
    <div className="relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex items-center justify-between p-6 bg-gradient-to-br from-white/80 via-indigo-50/30 to-blue-50/40 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 hover:border-indigo-200/50 transition-all duration-300 hover:shadow-indigo-500/10 hover:shadow-2xl transform hover:-translate-y-1">
        
        <div className="absolute top-2 right-4 w-20 h-20 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-2 left-4 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">₹</span>
              </div>
            </div>
            
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 tracking-wide">
              Your Balance
            </div>
          </div>
          
          <div className="relative">
            <div className="text-3xl font-bold text-gray-800 tracking-tight transform transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-gray-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
                ₹{balance.toLocaleString("en-IN")}
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-1 px-2 py-1 bg-green-100/80 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-700">Active</span>
          </div>
          
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <div className="w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-3 border-b-white"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 pointer-events-none"></div>
    </div>
  );
};

export default Balance;