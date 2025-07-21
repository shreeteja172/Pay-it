import React from "react";

const Button = ({ label, onClick, className = "", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`w-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
