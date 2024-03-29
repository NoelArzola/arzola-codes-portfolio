import React, { useRef, useState } from "react";
import { MyBrew } from "./MyBrew";
import { FreshTea } from "./FreshTea";
import { Compose } from "./Compose";

export const TeaL = ({
  tappedLogo,
  resetTappedLogo,
}: {
  tappedLogo: any;
  resetTappedLogo: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const ref: any = useRef(null);

  if (tappedLogo && ref.current != null) {
    /* 
    okay this below fixes the black teaL bug, 
    do NOT use scrollTop because the scroll behavior 
    is not respected and causes janky shit to happen
    */
    ref.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    ref.current.focus();
    setTimeout(() => {
      resetTappedLogo();
    }, 500);
  }

  return (
    <section id="teaL" className="text-white font-semibold pt-[4.5rem]">
      <div
        className="mx-4 posts-container overflow-scroll lg:overflow-auto"
        ref={ref}
      >
        <div className="flex mx-4 max-w-7xl lg:mx-auto">
          <div
            onClick={() => setActiveIndex(0)}
            className={`py-3 text-center w-full cursor-pointer`}
          >
            <h2 className={activeIndex !== 0 ? "text-gray-400" : ""}>
              My Brew
            </h2>
          </div>
          <div
            onClick={() => setActiveIndex(1)}
            className={`py-3 text-center w-full cursor-pointer`}
          >
            <h2 className={activeIndex !== 1 ? "text-gray-400" : ""}>
              Fresh Tea
            </h2>
          </div>
        </div>
        <div className="grid max-w-7xl mx-auto">
          <div
            className={`h-0.5 w-1/2 mb-8 bg-white ${
              activeIndex === 0 ? "left" : "right"
            }`}
          ></div>
        </div>
        <MyBrew isActive={activeIndex === 0} />
        <FreshTea isActive={activeIndex === 1} />
      </div>
      <Compose />
    </section>
  );
};
