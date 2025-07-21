import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../lib/contextapi";

const AppBar = () => {
  const navigate = useNavigate();
  const { firstName, lastName } = useContext(Context);

  const handleLogic = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_APP_URL}/api/v1/user/settings`,
        { firstName, lastName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

    navigate("/settings");
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-md rounded-xl px-5 py-2.5 flex items-center justify-between">
      <h1 className="text-lg font-medium text-white tracking-tight">Pay-it</h1>
      <nav className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-sm text-zinc-300 hover:text-white transition-colors"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/about")}
          className="text-sm text-zinc-300 hover:text-white transition-colors"
        >
          About
        </button>
      </nav>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-zinc-400">Hello</span>
        <button
          onClick={handleLogic}
          className="h-8 w-8 rounded-full bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 text-sm"
        >
          {firstName?.[0]}
          {lastName?.[0]}
        </button>
      </div>
    </header>
  );
};

export default AppBar;
