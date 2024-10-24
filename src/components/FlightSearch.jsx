import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker

const FlightSearch = ({ setFlights }) => {
  // State to store search queries for origin and destination
  const [queryOrigin, setQueryOrigin] = useState("");
  const [queryDestination, setQueryDestination] = useState("");

  // State to store fetched airports for origin and destination
  const [originAirports, setOriginAirports] = useState([]);
  const [destinationAirports, setDestinationAirports] = useState([]);

  // State to store selected airport details
  const [origin, setOrigin] = useState({ skyId: "", entityId: "" });
  const [destination, setDestination] = useState({ skyId: "", entityId: "" });

  // State to store selected date
  const [travelDate, setTravelDate] = useState(null);

  // Refs for dropdowns
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  // Fetch airports based on user query
  const fetchAirports = async (searchQuery, isOrigin) => {
    const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${searchQuery}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c4f82df44amsh8a67a04550b0f8cp124510jsnf8f134c19547", // Replace with your actual API key
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (isOrigin) {
        setOriginAirports(result.data || []);
      } else {
        setDestinationAirports(result.data || []);
      }
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
  };

  // Fetch airports for origin when query changes
  useEffect(() => {
    if (queryOrigin) {
      fetchAirports(queryOrigin, true);
    } else {
      setOriginAirports([]); // Clear suggestions if input is empty
    }
  }, [queryOrigin]);

  // Fetch airports for destination when query changes
  useEffect(() => {
    if (queryDestination) {
      fetchAirports(queryDestination, false);
    } else {
      setDestinationAirports([]); // Clear suggestions if input is empty
    }
  }, [queryDestination]);

  // Handle airport selection
  const handleAirportSelect = (airport, isOrigin) => {
    if (isOrigin) {
      setOrigin({ skyId: airport.skyId, entityId: airport.entityId });
      setQueryOrigin(airport.skyId); // Set the input to the selected airport name
      setOriginAirports([]); // Clear suggestions
    } else {
      setDestination({ skyId: airport.skyId, entityId: airport.entityId });
      setQueryDestination(airport.skyId); // Set the input to the selected airport name
      setDestinationAirports([]); // Clear suggestions
    }
  };

  // Handle the date change for the date picker
  const handleDateChange = (date) => {
    setTravelDate(date);
  };

  // Function to search flights
  const searchFlights = async () => {
    const options = {
      method: "GET",
      url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
      params: {
        originSkyId: origin.skyId,
        destinationSkyId: destination.skyId,
        originEntityId: origin.entityId,
        destinationEntityId: destination.entityId,
        cabinClass: "economy", // You can make this dynamic as well
        adults: "1", // You can add more state variables to make this dynamic
        sortBy: "best",
        currency: "USD",
        market: "en-US",
        countryCode: "US",
        date: travelDate ? travelDate.toLocaleDateString("en-CA") : null, // Format date
      },
      headers: {
        "x-rapidapi-key": "c4f82df44amsh8a67a04550b0f8cp124510jsnf8f134c19547", // Replace with your actual API key
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setFlights(response.data.data); // Store fetched flight results in the state
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  // Hide dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (originRef.current && !originRef.current.contains(event.target)) {
      setOriginAirports([]);
    }
    if (
      destinationRef.current &&
      !destinationRef.current.contains(event.target)
    ) {
      setDestinationAirports([]);
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10">
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Search for Flights
        </h1>
        <div className="flex flex-col justify-between items-center gap-5">
          {/* Origin Airport Search */}
          <div className="mb-5 w-full" ref={originRef}>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Origin Airport
            </label>
            <div className="relative">
              <input
                type="text"
                value={queryOrigin}
                onChange={(e) => setQueryOrigin(e.target.value)}
                placeholder="Type origin airport name..."
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
              {/* Suggestions dropdown */}
              {queryOrigin && originAirports.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {originAirports.map((airport) => (
                    <li
                      key={airport.entityId}
                      onClick={() => handleAirportSelect(airport, true)} // Pass true for origin
                      className="px-4 py-2  text-black hover:bg-blue-100 cursor-pointer"
                    >
                      {airport.skyId}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* Destination Airport Search */}
          <div className="mb-5 w-full" ref={destinationRef}>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Destination Airport
            </label>
            <div className="relative">
              <input
                type="text"
                value={queryDestination}
                onChange={(e) => setQueryDestination(e.target.value)}
                placeholder="Type destination airport name..."
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
              {/* Suggestions dropdown */}
              {queryDestination && destinationAirports.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                  {destinationAirports.map((airport) => (
                    <li
                      key={airport.entityId}
                      onClick={() => handleAirportSelect(airport, false)} // Pass false for destination
                      className="px-4 py-2 text-black hover:bg-blue-100 cursor-pointer"
                    >
                      {airport.skyId}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Date Picker for Travel Date */}
          <div className="mb-6 w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Select Travel Date
            </label>

            <DatePicker
              selected={travelDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Search Button */}
          <button
            onClick={searchFlights}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
