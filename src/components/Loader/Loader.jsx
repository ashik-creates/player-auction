import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-11/12 mx-auto p-20 shadow-
    xl border-2 border-gray-200">
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </div>
  );
};

export default Loader;
