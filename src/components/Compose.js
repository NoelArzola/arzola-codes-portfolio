import { React, useState } from "react";
import spillImage from "../images/user02.jpg";

export const Compose = () => {
  const [message, setMessage] = useState(0);

  return (
    <div className="flex bg-[#0425cf] px-4 pt-5 pb-8 rounded-tl-3xl rounded-tr-3xl lg:rounded-none w-full lg:justify-center items-center">
      <img src={spillImage} alt="" className="rounded-full h-12 w-12 mr-1.5" />
      <form action="" className="w-full lg:w-1/2">
        <input
          type="text"
          className="rounded-full bg-black text-white text-sm px-4 py-3 w-full"
          onClick={() => setMessage(1)}
          value={
            message === 1 ? "um hi 👀 I didn't build this out, sorry lol" : ""
          }
          readOnly
        />
      </form>
    </div>
  );
};
