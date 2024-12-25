import React from "react";
import { FaDownload, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Nav() {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] h-16 flex items-center justify-between px-6
      backdrop-blur-md shadow-lg z-20`}
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <span className="text-xl font-bold">S K Dental</span>
      </div>

      {/* Center Section: Navigation Links */}
      <ul className="flex items-center space-x-8">
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

      {/* Right Section: Rx Form Download */}
      <div className="flex items-center space-x-4">
        {/* Contact Info */}
        {/* <div className="hidden md:flex flex-col items-end text-right">
          <span className="flex items-center text-sm font-medium">
            <FaPhoneAlt className="mr-2 text-lg" />
            (604) 273-1163
          </span>
          <span className="flex items-center text-sm font-medium">
            <FaEnvelope className="mr-2 text-lg" />
            skdentalceramic@gmail.com
          </span>
        </div> */}

        {/* Rx Form Download Button */}
        <a
          href="/rx-form.pdf" //ADD RX-FORM PDF 
          download
          className="flex items-center bg-[var(--primary)] px-4 py-2 rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-200 ease-in-out"
        >
          <FaDownload className="mr-2" />
          Rx Form
        </a>
      </div>
    </nav>
  );
}


// change to hamburger icon and sidebar for small screens