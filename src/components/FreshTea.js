import React from "react";

export const FreshTea = ({ isActive, onClick }) => {
  return (
    <section
      id="freshTea"
      className={`flex justify-center py-4 text-white font-semibold w-full ${
        isActive ? "border-b-white border-b-2" : ""
      }`}
      onClick={onClick}
    >
      <div>
        <h2>Fresh Tea</h2>
      </div>
    </section>
  );
};
