import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
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
          Travel Made Easy with JetSetGo
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Book flights seamlessly, explore the skies, and experience hassle-free
          travel. Get the best deals on flights and enjoy an effortless booking
          experience.
        </p>
        <button
          onClick={() => {
            navigate("/booking");
          }}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
        >
          Find Flights
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900 text-center px-40">
        <h2 className="text-4xl font-bold mb-8">Why Choose JetSetGo?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Affordable Prices</h3>
            <p>
              We compare fares from top airlines to ensure you get the best
              price.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              User-Friendly Interface
            </h3>
            <p>
              Seamless and easy-to-navigate booking system for a smooth
              experience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
            <p>
              We're here to help you any time of the day for any travel-related
              queries.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 text-center px-40">
        <h2 className="text-4xl font-bold mb-8">About JetSetGo</h2>
        <p className="max-w-3xl mx-auto text-lg">
          JetSetGo is dedicated to making air travel convenient and affordable.
          Whether you're flying for business or pleasure, we provide a
          streamlined platform for you to book flights and enjoy your journey.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 bg-gray-800 text-center px-40">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p>Email: support@jetsetgo.com | Phone: +123 456 7890</p>
        <p className="mt-4">&copy; 2024 JetSetGo. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default LandingPage;
