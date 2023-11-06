import React from "react";

export const MyBrew = ({ isActive, onClick }) => {
  return (
    <section
      id="myBrew"
      className={`flex justify-center py-4 text-white font-semibold w-full ${
        isActive ? "border-b-white border-b-2" : ""
      }`}
      onClick={onClick}
    >
      <div>
        <h2>My Brew</h2>
      </div>
    </section>
  );
};
