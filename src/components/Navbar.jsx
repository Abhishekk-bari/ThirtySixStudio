import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full p-8 flex justify-between z-50">
        <div className="brand text-2xl font-regular">LensCraft</div>
        <div className="links flex gap-10">
          {["", "About", "Work", "Testimonial"].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className="text-md hover:text-gray-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
      <hr className="border-t border-gray-900" />
    </>
  );
};

export default Navbar;
