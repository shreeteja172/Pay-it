import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import AppBar from "../components/AppBar";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../lib/contextapi";
import { useNavigate } from "react-router-dom";


const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name") || "";
  const [amount, setAmount] = useState(0);
  const {setBalance} = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-zinc-800 border border-zinc-700 rounded-2xl shadow-2xl p-8 relative space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Send Money
            </h2>
            <p className="text-sm text-zinc-400">
              Securely transfer funds in just a few clicks
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-zinc-700/40 rounded-xl p-4 shadow-inner">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
              {name[0]?.toUpperCase() +
                " " +
                name.split(" ")[1]?.[0]?.toUpperCase()}
            </div>
            <h3 className="text-xl font-medium text-white">{name}</h3>
          </div>

          <div className="space-y-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-zinc-300"
            >
              Amount (in ₹)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 text-lg">
                ₹
              </span>
              <input
                min="0"
                id="amount"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                placeholder="Enter amount"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={() => {
              axios
                .post(
                  `${
                    import.meta.env.VITE_BACKEND_APP_URL
                  }/api/v1/account/transfer`,
                  { to: id, amount },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                )
                .then(() => {
                  toast.success("Transfer successful! 🎉");
                  setAmount(0);
                  setBalance((prev) => prev - amount);
                  navigate("/dashboard");
                })

                .catch((error) =>
                  toast.error(
                    `Transfer failed: ${
                      error.response?.data?.message || "Please try again later."
                    }`
                  )
                );
            }}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-base font-medium shadow-lg hover:-translate-y-[1px] transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
              <span>Initiate Transfer</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
