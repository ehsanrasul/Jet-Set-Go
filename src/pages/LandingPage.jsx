// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   return (
//     <main className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-40 py-6">
//         <div className="text-3xl font-bold">JetSetGo</div>
//         <ul className="flex space-x-6 text-lg">
//           <li>
//             <a href="#features" className="hover:text-gray-300">
//               Features
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-gray-300">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-gray-300">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center text-center pt-20 pb-32">
//         <h1 className="text-5xl font-extrabold mb-4">
//           Travel Made Easy with JetSetGo
//         </h1>
//         <p className="text-xl mb-8 max-w-2xl">
//           Book flights seamlessly, explore the skies, and experience hassle-free
//           travel. Get the best deals on flights and enjoy an effortless booking
//           experience.
//         </p>
//         <button
//           onClick={() => {
//             navigate("/booking");
//           }}
//           className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600"
//         >
//           Find Flights
//         </button>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-gray-900 text-center px-40">
//         <h2 className="text-4xl font-bold mb-8">Why Choose JetSetGo?</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4">Affordable Prices</h3>
//             <p>
//               We compare fares from top airlines to ensure you get the best
//               price.
//             </p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4">
//               User-Friendly Interface
//             </h3>
//             <p>
//               Seamless and easy-to-navigate booking system for a smooth
//               experience.
//             </p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
//             <p>
//               We're here to help you any time of the day for any travel-related
//               queries.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 text-center px-40">
//         <h2 className="text-4xl font-bold mb-8">About JetSetGo</h2>
//         <p className="max-w-3xl mx-auto text-lg">
//           JetSetGo is dedicated to making air travel convenient and affordable.
//           Whether you're flying for business or pleasure, we provide a
//           streamlined platform for you to book flights and enjoy your journey.
//         </p>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="py-10 bg-gray-800 text-center px-40">
//         <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
//         <p>Email: support@jetsetgo.com | Phone: +123 456 7890</p>
//         <p className="mt-4">&copy; 2024 JetSetGo. All Rights Reserved.</p>
//       </footer>
//     </main>
//   );
// };

// export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import FlightListings from "../components/FlightListings";
import DatePicker from "rsuite";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-4">
      <div className="grid place-items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">Flights</h1>
      </div>
      <div class="w-full max-w-3xl mx-auto p-6 bg-white rounded-md shadow-lg">
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button class="flex items-center px-3 py-2 bg-gray-100 rounded-md shadow-sm text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7h.01M12 7h.01M16 7h.01M21 10a7.963 7.963 0 00-1.1-4h.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H18a1.001 1.001 0 00-.9 1.45A7.963 7.963 0 0012 2a7.963 7.963 0 00-5.1 1.95A1.001 1.001 0 006 2.5v-1.5a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v2.5a.5.5 0 00.5.5h.5A7.963 7.963 0 003 10c0 1.29.22 2.52.63 3.65A8.001 8.001 0 0012 20a8.001 8.001 0 008.37-7.35A7.963 7.963 0 0021 10z"
                />
              </svg>
              Multi-city
            </button>
          </div>
          <div>
            <input
              type="number"
              min="1"
              value="1"
              class="w-16 px-3 py-2 bg-gray-100 rounded-md text-gray-700 shadow-sm focus:outline-none"
            />
          </div>
          <div>
            <select class="px-3 py-2 bg-gray-100 rounded-md shadow-sm text-gray-700 focus:outline-none">
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div class="col-span-1">
            <input
              type="text"
              placeholder="Where from?"
              class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-black shadow-sm focus:outline-none"
            />
          </div>
          <div class="col-span-1">
            <input
              type="text"
              placeholder="Where to?"
              class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-black shadow-sm focus:outline-none"
            />
          </div>
          <div class="col-span-1">
            <input
              type="date"
              value="2024-10-28"
              class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none"
            />
          </div>
          <div class="col-span-1">
            <input
              type="date"
              value="2024-10-28"
              class="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none"
            />
          </div>
        </div>

        <div class="mt-4 flex items-center space-x-4">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-500 focus:outline-none flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12h-6m6-4H9m6 8H9"
              />
            </svg>
            Search
          </button>
        </div>
      </div>

      <FlightListings />
      <MapComponent />
    </div>
  );
};

export default LandingPage;
