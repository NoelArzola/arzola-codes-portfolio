import React, { useState } from "react";
import { MyBrew } from "./MyBrew";
import { FreshTea } from "./FreshTea";
import { Compose } from "./Compose";

export const TeaL = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="teaL" className="text-white font-semibold pt-16">
      <div className="flex mx-4">
        <div
          onClick={() => setActiveIndex(0)}
          className={`mb-8 py-4 text-center w-full ${
            activeIndex === 0 ? "border-b-white border-b-2" : ""
          }`}
        >
          <h2 className={activeIndex !== 0 ? "text-gray-400" : ""}>My Brew</h2>
        </div>
        <div
          onClick={() => setActiveIndex(1)}
          className={`mb-8 py-4 text-center w-full ${
            activeIndex === 1 && "border-b-white border-b-2"
          }`}
        >
          <h2 className={activeIndex !== 1 ? "text-gray-400" : ""}>
            Fresh Tea
          </h2>
        </div>
      </div>
      <div className="mx-4 posts-container overflow-scroll lg:overflow-auto">
        <MyBrew isActive={activeIndex === 0} />
        <FreshTea isActive={activeIndex === 1} />
      </div>
      <Compose />
    </section>
  );
};
