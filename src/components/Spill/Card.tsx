import React from "react";
import { CardContent } from "./CardContent";
import { CardData } from "./CardData";

export const Card = (props: any) => {
  return (
    <li className="mb-8 md:w-[48%] lg:w-[32%]">
      <CardContent {...props} />
      <CardData {...props} />
    </li>
  );
};
