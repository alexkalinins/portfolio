import React from "react";

export default function ShiftingTextHero() {
  const HeroText = () => (
    <h1>
      ALEX
      <br />
      KALININS
    </h1>
  );

  return (
    <div className="hero">
      <h1>
        <HeroText />
        <div id="shift1">
          <HeroText />
        </div>
        <div id="shift2">
          <HeroText />
        </div>
        <div id="shift3">
          <HeroText />
        </div>
        <div id="shift4">
          <HeroText />
        </div>
      </h1>
    </div>
  );
}
