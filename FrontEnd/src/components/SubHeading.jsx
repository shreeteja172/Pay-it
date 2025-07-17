import React from 'react';

const SubHeading = ({ label }) => {
  return (
    <div className="text-gray-500 text-sm font-medium pt-2 px-4 pb-4 tracking-tight">
      {label}
    </div>
  );
};

export default SubHeading;