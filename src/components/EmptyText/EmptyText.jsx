import React from "react";

const EmptyText = () => {
  return (
    <div className="flex justify-center items-center p-20 shadow-xl border-2 border-gray-200 rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold">No player is selected</h1>
        <p>Select your players</p>
      </div>
    </div>
  );
};

export default EmptyText;
