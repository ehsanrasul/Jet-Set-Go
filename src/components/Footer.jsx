import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Language, Location, Currency Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <div className="flex items-center">
            <span className="text-sm">Language ·</span>
            <button className="text-blue-600 ml-1">
              English (United States)
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-sm">Location ·</span>
            <button className="text-blue-600 ml-1">Pakistan</button>
          </div>
          <div className="flex items-center">
            <span className="text-sm">Currency ·</span>
            <button className="text-blue-600 ml-1">PKR</button>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-sm text-center text-gray-500">
          Prices are final prices and include all taxes and fees, including
          payment fees for the cheapest common payment method (which may differ
          depending on the provider). Additional charges may apply for other
          types of payment, luggage, meals, WLAN or other additional services.
          Prices, availability, and travel details are provided based on the
          latest information received from our partners. This information is
          reflected in the results within a period of less than 24 hours.
          Additional conditions may also be applied by our partners. You should
          then check prices and conditions with the service providers before
          booking.
        </p>

        {/* Links Section */}
        <div className="flex justify-center space-x-6 mt-4 text-sm">
          <button className="text-blue-600">About</button>
          <button className="text-blue-600">Privacy</button>
          <button className="text-blue-600">Terms</button>
          <button className="text-blue-600">Join user studies</button>
          <button className="text-blue-600">Feedback</button>
          <button className="text-blue-600">Help Center</button>
        </div>

        {/* International Sites */}
        <div className="flex justify-center mt-8">
          <div className="text-gray-500 text-sm cursor-pointer">
            International sites
          </div>
        </div>

        {/* Explore Flights Button */}
        <div className="flex justify-center mt-2">
          <button className="text-blue-600 text-sm">Explore flights</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
