import React from "react";

export default function MenuDropdown() {
  const [showing, setShowing] = React.useState(false);

  return (
    <div
      className="menu"
      onMouseEnter={() => setShowing(true)}
      onMouseLeave={() => setShowing(false)}
    >
      <span>Menu</span>
      {showing && (
        <div className="menuDropDown">
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      )}
    </div>
  );
}
