import { React, useState } from "react";
import { TeaL } from "../components/TeaL";
import spillImage from "../images/user02.jpg";

export const Spill = () => {
  const [message, setMessage] = useState(0);

  return (
    <main
      className="bg-black relative h-screen max-h-screen overflow-hidden font-sans"
      role="main"
    >
      <nav className=" bg-green-800 pt-6 pb-3 rounded-bl-3xl rounded-br-3xl">
        <h1 className="text-2xl text-white text-center uppercase font-extrabold">
          Spill
        </h1>
      </nav>
      <TeaL />
      <div className="flex bg-blue-800 px-4 pt-5 pb-12 rounded-tl-3xl rounded-tr-3xl absolute w-full bottom-12">
        <img
          src={spillImage}
          alt=""
          className="rounded-full h-10 w-10 mr-1.5"
        />
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
    </main>
  );
};
