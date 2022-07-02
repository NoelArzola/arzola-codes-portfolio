import React from "react";
import { services } from "./data";

const Services = () => {
  const displayServices = (servicesArray) => {
    return servicesArray.map((service) => (
      <div>
        <h2>{service.icon}</h2>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
      </div>
    ));
  };
  return <main>{displayServices(services)}</main>;
};

export default Services;
