import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold border transition ${
      isActive
        ? "bg-black text-white border-black"
        : "text-black border-gray-400 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-[#FFFFF0] shadow-md py-4 px-6 flex justify-center gap-4 border-b border-black">
      <NavLink to="/" className={navLinkClass}>
        Inicio
      </NavLink>
    </nav>
  );
};
