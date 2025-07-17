import React from "react";

const InputBox = ({ label, placeholder, onChange, type = "text" }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-800"
      />
    </div>
  );
};

export default InputBox;