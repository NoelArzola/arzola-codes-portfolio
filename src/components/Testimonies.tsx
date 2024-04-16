import React from "react";
import { ITestimony, testimonies } from "../data/data";

const Testimonies = () => {
  return (
    <section className="max-w-7xl mx-auto mb-2" id="testimonies">
      <h2 className="font-jetbrains text-3xl lg:text-4xl text-center my-12">
        testimonials
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2 justify-between mt-12">
        {testimonies.map((testimony: ITestimony) => (
          <div
            key={testimony.reviewer}
            className="bg-almost-white p-10 max-w-4xl w-full md:w-2/3 mx-auto mb-5 lg:mb-0 lg:max-w-[423px]"
          >
            <div>
              <p className={!testimony.isShort ? "lg:h-80" : ""}>
                {testimony.review}
              </p>
              <h3 className="font-bold text-xl mt-5">{testimony.reviewer}</h3>
              <p>
                <span className="italic">{testimony.title}</span> -{" "}
                {testimony.business}
              </p>
              {testimony.title2 && testimony.business2 && (
                <p>
                  <span className="italic">{testimony.title2}</span> -{" "}
                  {testimony.business2}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
