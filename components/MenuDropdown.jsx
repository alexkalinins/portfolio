import React from "react";
import Link from "next/link";

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
        <div className="flex flex-col items-end absolute right-0 cursor-pointer">
          <Link href="/about">
            <span className="growLink">About</span>
          </Link>

          <Link href="/projects">
            <span className="growLink">Projects</span>
          </Link>

          <Link href="/contact">
            <span className="growLink">Contact</span>
          </Link>
        </div>
      )}
    </div>
  );
}
