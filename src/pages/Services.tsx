import React from "react";
import { services } from "../data/data";

type TServices = Array<{
  name: string;
  icon: React.JSX.Element;
  description: string;
}>;

export const Services = () => {
  const displayServices = (servicesArray: TServices) => {
    return servicesArray.map((service: any) => (
      <div className="bg-almost-white px-4 py-24 md:w-[49%]" key={service.name}>
        <div>
          <h2 className="text-2xl text-center">{service.icon}</h2>
          <h2 className="font-jetbrains text-2xl text-center">
            {service.name}
          </h2>
        </div>
        <p className="mt-4 md:px-8 lg:px-24">{service.description}</p>
      </div>
    ));
  };
  return (
    <main className="max-w-7xl mx-auto bg-gray-lightest pb-2" role="main">
      <h1 className="font-jetbrains text-4xl text-center py-16">services</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-2">
        {displayServices(services)}
      </div>
    </main>
  );
};
