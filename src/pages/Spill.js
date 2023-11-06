import React from "react";
import { TeaL } from "../components/TeaL";
import spillImage from "../images/user02.jpg";

export const Spill = () => {
  return (
    <main className="bg-black" role="main">
      <nav className=" bg-green-800 py-3 rounded-bl-3xl rounded-br-3xl">
        <h1 className="text-2xl text-white text-center uppercase font-extrabold">
          Spill
        </h1>
      </nav>
      <TeaL />
      <div className="flex bg-blue-800 px-4 pt-5 pb-8 rounded-tl-3xl rounded-tr-3xl">
        <img
          src={spillImage}
          alt=""
          className="rounded-full h-10 w-10 mr-1.5"
        />
        <input
          type="text"
          className="rounded-full bg-black text-white py-2 w-full"
        />
      </div>
    </main>
  );
};
