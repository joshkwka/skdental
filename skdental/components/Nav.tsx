import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import RxForm from "./helper/RxForm";

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  targetId: string
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offset = -64; 
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  setIsSidebarOpen(false); 
};


  const closeSidebar = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-[var(--header-background)] text-[var(--sidebar-foreground)] h-16 flex items-center justify-between px-6
        backdrop-blur-md shadow-lg z-20`}
      >
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold">S K Dental</span>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md-lg:hidden z-40">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[var(--sidebar-foreground)] text-2xl"
          >
            {isSidebarOpen ? "": <FaBars />}
          </button>
        </div>


        {/* Center Section: Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md-lg:flex items-center space-x-8">
          <li>
            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, "about")}
              className="px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#products"
              onClick={(e) => handleScrollToSection(e, "products")}
              className="px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#digital-case"
              onClick={(e) => handleScrollToSection(e, "digital-case")}
              className="px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
            >
              Digital Case
            </a>
          </li>
          <li>
            <a
              href="#order"
              onClick={(e) => handleScrollToSection(e, "order")}
              className="px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
            >
              Order
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              onClick={(e) => handleScrollToSection(e, "contact-us")}
              className="px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Section: Rx Form Download (Hidden on Small Screens) */}
        <div className="hidden md-lg:flex items-center space-x-4">
          <RxForm />
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] shadow-lg z-30 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button (X Icon) */}
        <div className="absolute top-4 right-4 z-40">
          <button
            onClick={closeSidebar}
            className="text-2xl text-[var(--sidebar-foreground)]"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mt-8 p-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScrollToSection(e, "products")}
                className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#digital-case"
                onClick={(e) => handleScrollToSection(e, "digital-case")}
                className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
              >
                Digital Case
              </a>
            </li>
            <li>
              <a
                href="#order"
                onClick={(e) => handleScrollToSection(e, "order")}
                className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
              >
                Order
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                onClick={(e) => handleScrollToSection(e, "contact-us")}
                className="block px-4 py-2 rounded-md hover:bg-[var(--sidebar-hover-background)] transition-colors duration-200 ease-in-out"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* RxForm Section */}
        <div className="flex justify-center items-center mt-auto mb-3">
          <RxForm />
        </div>
        {/* Bottom Contact Section */}
        <div className="p-6 border-t border-gray-700">
          <div className="text-sm">
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-lg" /> (604) 273-1163
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-lg" /> skdentalceramic@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


