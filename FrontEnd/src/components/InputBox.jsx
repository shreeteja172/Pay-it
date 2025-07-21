import React from "react";

const InputBox = ({ label, placeholder, onChange, type = "text" }) => {
  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-300 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export default InputBox;
