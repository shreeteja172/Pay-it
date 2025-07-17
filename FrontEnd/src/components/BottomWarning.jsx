import React from 'react';
import { Link } from 'react-router-dom';

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-3 text-sm flex justify-center items-center space-x-2">
      <span className="text-gray-600 font-medium">{label}</span>
      <Link
        to={to}
        className="text-indigo-600 font-semibold underline hover:text-indigo-700 transition-colors duration-200 cursor-pointer"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default BottomWarning;