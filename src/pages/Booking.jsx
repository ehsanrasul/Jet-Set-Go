import React, { useState } from "react";
import FlightSearch from "../components/FlightSearch";
import FlightListings from "../components/FlightListings";

const Booking = () => {
  const [flights, setFlights] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-40 py-6">
        <div className="text-3xl font-bold">JetSetGo</div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-32">
        <h1 className="text-5xl font-extrabold mb-4">
          Book Your Flight with JetSetGo
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Explore our flight options and book your journey seamlessly. Enjoy
          hassle-free travel with competitive pricing and exceptional support.
        </p>
      </section>

      {/* Search Component */}
      <FlightSearch setFlights={setFlights} />

      {/* Flight Listings */}
      <FlightListings flightData={flights} />

      {/* Footer */}
      <footer id="contact" className="py-10 bg-gray-800 text-center px-40">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p>Email: support@jetsetgo.com | Phone: +123 456 7890</p>
        <p className="mt-4">&copy; 2024 JetSetGo. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Booking;
