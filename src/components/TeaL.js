import React, { useState } from "react";
import { MyBrew } from "./MyBrew";
import { FreshTea } from "./FreshTea";

export const TeaL = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="teaL" className="text-white font-semibold mx-4">
      <div className="flex">
        <div
          onClick={() => setActiveIndex(0)}
          className={`mb-8 py-4 text-center w-full ${
            activeIndex === 0 ? "border-b-white border-b-2" : ""
          }`}
        >
          <h2>My Brew</h2>
        </div>
        <div
          onClick={() => setActiveIndex(1)}
          className={`mb-8 py-4 text-center w-full ${
            activeIndex === 1 ? "border-b-white border-b-2" : ""
          }`}
        >
          <h2>Fresh Tea</h2>
        </div>
      </div>
      <MyBrew isActive={activeIndex === 0} />
      <FreshTea isActive={activeIndex === 1} />
    </section>
  );
};
