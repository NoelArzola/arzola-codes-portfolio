import { React, useState } from "react";
import spillImage from "../images/user02.jpg";

export const Compose = () => {
  const [message, setMessage] = useState(0);

  return (
    <div className="flex bg-blue-800 px-4 pt-5 pb-12 rounded-tl-3xl rounded-tr-3xl w-full">
      <img src={spillImage} alt="" className="rounded-full h-10 w-10 mr-1.5" />
      <form action="" className="w-full">
        <input
          type="text"
          className="rounded-full bg-black text-white px-4 py-2 w-full"
          onClick={() => setMessage(1)}
          value={
            message === 1 ? "um hi 👀 I didn't build this out, sorry lol" : ""
          }
        />
      </form>
    </div>
  );
};
