import React, { useState } from "react";
import logo from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(null); // Controls which modal is open
  const cartItems = 5;
  const cartCost = 120.99;

  // Function to render modal content based on `modalOpen`
  const renderModalContent = () => {
    switch (modalOpen) {
      case "home":
        return <p>Welcome to the Home section!</p>;
      case "bicycles":
        return <p>Check out our latest Bicycles!</p>;
      case "accessories":
        return <p>Explore our range of Accessories!</p>;
      case "about":
        return <p>Learn more About Us!</p>;
      case "contact":
        return <p>Get in touch with us through the Contact page!</p>;
      case "cart":
        return (
          <>
            <p>You have {cartItems} items in your cart.</p>
            <p>Total Cost: ${cartCost.toFixed(2)}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 flex justify-between items-center z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <nav className="hidden md:flex justify-center space-x-6 flex-grow">
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("home")}
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("bicycles")}
        >
          Bicycles
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("accessories")}
        >
          Accessories
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("about")}
        >
          About Us
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("contact")}
        >
          Contact
        </a>
      </nav>

      <div className="flex items-center">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setModalOpen("cart")}
        >
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
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("home")}
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("bicycles")}
        >
          Bicycles
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("accessories")}
        >
          Accessories
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("about")}
        >
          About Us
        </a>
        <a
          href="#"
          className="hover:text-yellow-500 uppercase font-bold"
          onClick={() => setModalOpen("contact")}
        >
          Contact
        </a>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">
              {modalOpen.charAt(0).toUpperCase() + modalOpen.slice(1)} Modal
            </h2>
            {renderModalContent()}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setModalOpen(null)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
