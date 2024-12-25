import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact-us" className="mt-16 bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)] py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Address and Google Maps */}
        <div>
            <h3 className="flex items-center text-xl font-semibold mb-4">
                <FaMapMarkerAlt className="mr-2 text-red-500 text-lg" aria-label="Location Marker" />
                Our Location
            </h3>
            <p>8171 Ackroyd Rd, #5055</p>
            <p>Richmond, BC, V6X 3K1</p>
            <div className="mt-4">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.479276347307!2d-123.1346506!3d49.1724914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548675338e2781f3%3A0x1e856d15ce7561c9!2sS%20K%20Dental%20Ceramic%20Studio!5e0!3m2!1sen!2sca!4v1735160363822!5m2!1sen!2sca"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps Location"
                ></iframe>
            </div>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2 text-lg" />
            (604) 273-1163
          </p>
          <p className="flex items-center mt-2">
            <FaEnvelope className="mr-2 text-lg" />
            <a 
              href="mailto:skdentalceramic@gmail.com" 
              className="hover:underline"
            >
              skdentalceramic@gmail.com
            </a>
          </p>
          <div className="mt-4">
            <h4 className="flex items-center text-lg font-semibold">
              <FaClock className="mr-2 text-lg" />
              Operating Hours
            </h4>
            <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p>Sat: Pickup & Deliveries Only</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
