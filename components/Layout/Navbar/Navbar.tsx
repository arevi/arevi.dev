/* Disabling no-img-element because this will be exported as a static site, not served by Next */
/* eslint-disable @next/next/no-img-element */

import React from "react";

const Navbar = () => {
  return (
    <div
      id="navbar-container"
      className="flex h-10 items-center justify-between border-b px-4 drop-shadow-sm"
    >
      <img src="/logo.svg" width={64} height={64} alt="logo" />
      <nav>
        <ul className="flex w-full justify-center gap-3">
          <li className="text-sm font-medium hover:font-semibold">
            <a href="#" rel="noreferrer">
              Home
            </a>
          </li>
          <li className="text-sm font-medium hover:font-semibold">
            <a
              href="https://github.com/arevi/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="h-7 rounded bg-gray-900 px-2 text-center text-sm font-medium text-white hover:bg-black hover:transition-colors"
        title="Click me, or don't, no pressure"
      >
        <a href="mailto:hello@arevi.dev">Contact</a>
      </button>
    </div>
  );
};

export default Navbar;
