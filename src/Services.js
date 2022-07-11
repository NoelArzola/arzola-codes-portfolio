import React from "react";
import { services } from "./data";

const Services = () => {
  const displayServices = (servicesArray) => {
    return servicesArray.map((service) => (
      <div className="bg-almost-white py-24 w-[49%]" key={service.name}>
        <div>
          <h2 className="text-2xl text-center">{service.icon}</h2>
          <h2 className="font-jetbrains text-2xl text-center">
            {service.name}
          </h2>
        </div>
        <p className="mt-4 px-24">{service.description}</p>
      </div>
    ));
  };
  return (
    <main className="max-w-7xl mx-auto bg-gray-lightest pb-2" role="main">
      <h1 className="font-jetbrains text-4xl text-center py-16">services</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {displayServices(services)}
      </div>
    </main>
  );
};

export default Services;
