import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl overflow-hidden relative">
        {/* Subtle animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-blue-50/30 animate-pulse opacity-50"></div>
        
        <div className="px-8 py-10 space-y-8 relative z-10">
          <div className="flex flex-col space-y-3 text-center">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight bg-clip-text  bg-gradient-to-r from-indigo-600 to-blue-600">
              Send Money
            </h2>
            <p className="text-gray-600 text-sm font-medium">Securely transfer funds in just a few clicks</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-5 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl shadow-sm border border-gray-100/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                <span className="text-3xl font-bold text-white uppercase">
                  {name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 tracking-tight">
                {name}
              </h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label
                  className="text-base font-semibold text-gray-700 block"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 text-lg">₹</span>
                  <input
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="mt-1 block w-full pl-10 pr-4 py-3 text-black bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-lg placeholder-gray-400 transition-colors duration-200"
                    id="amount"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  axios
                    .post(
                      `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/account/transfer`,
                      {
                        to: id,
                        amount,
                      },
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    )
                    .then(() => {
                      alert("Transfer successful!");
                    })
                    .catch((error) => {
                      alert(
                        "Transfer failed: " + error.response?.data?.message
                      );
                    });
                }}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                  Initiate Transfer
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;