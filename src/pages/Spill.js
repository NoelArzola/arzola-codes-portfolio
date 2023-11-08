import { React } from "react";
import { TopMenu as Nav } from "../components/TopMenu";
import { TeaL } from "../components/TeaL";

export const Spill = () => {
  return (
    <main className="bg-black relative font-sans" role="main">
      <Nav />
      <TeaL />
    </main>
  );
};
