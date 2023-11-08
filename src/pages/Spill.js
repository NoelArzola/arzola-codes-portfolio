import { React, useState } from "react";
import { TopMenu as Nav } from "../components/TopMenu";
import { TeaL } from "../components/TeaL";

export const Spill = () => {
  const [tappedLogo, setTappedLogo] = useState(false);

  const handleLogoTap = () => {
    setTappedLogo(true);
  };

  const resetTappedLogo = () => {
    setTappedLogo(false);
  };

  return (
    <main className="bg-black relative font-sans min-h-[100dvh]" role="main">
      <Nav handleLogoTap={handleLogoTap} />
      <TeaL tappedLogo={tappedLogo} resetTappedLogo={resetTappedLogo} />
    </main>
  );
};
