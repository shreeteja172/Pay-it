import React from 'react'

const Heading = ({ label }) => {
  return (
    <div className="text-4xl font-bold pt-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 tracking-tight transition-all duration-300 hover:scale-[1.02]">
      {label}
    </div>
  );
};

export default Heading;