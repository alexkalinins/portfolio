import React from "react";
import Link from 'next/link'

export default function MenuDropdown() {
  const [showing, setShowing] = React.useState(false);

  return (
    <div
      className="menu"
      onMouseEnter={() => setShowing(true)}
      onMouseLeave={() => setShowing(false)}
    >
      <span className="growLink">Menu</span>
      {showing && (
        <div className="menuDropDown">
          <Link href="/" >
            <span className="growLink">About</span>
          </Link>

          <Link href="/" >
            <span className="growLink">Projects</span>
          </Link>

          <Link href="/photography" >
            <span className="growLink">Photography</span>
          </Link>

          <Link href="/">
            <span className="growLink">Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
}
