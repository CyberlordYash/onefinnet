import React, { useState } from "react";
import logo from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = 5; 
  const cartCost = 0.00;
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 flex justify-between items-center z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <nav className="hidden md:flex justify-center space-x-6 flex-grow">
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Home
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Bicycles
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Accessories
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Contact
        </a>
      </nav>

      <div className="flex items-center">
        <div className="flex items-center space-x-2">
        <span className="text-sm md:text-base font-semibold">
            ${cartCost.toLocaleString("en-IN")}
          </span>
          <span className="relative font-bold">
            <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
            <span className="absolute -top-3 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
              {cartItems}
            </span>
          </span>
       
        </div>

        <button
          className="ml-4 text-2xl focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-black text-white py-10 px-6 flex flex-col items-center space-y-6 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
    
        <button
          className="absolute top-4 right-6 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Home
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Bicycles
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Accessories
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-500 uppercase font-bold">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
