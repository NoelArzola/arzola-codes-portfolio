import React, { useState } from "react";
import { MyBrew } from "./MyBrew";
import { FreshTea } from "./FreshTea";

export const TeaL = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="teaL" className="flex text-white font-semibold mx-4">
      <MyBrew isActive={activeIndex === 0} onClick={() => setActiveIndex(0)} />
      <FreshTea
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
      />
    </section>
  );
};
