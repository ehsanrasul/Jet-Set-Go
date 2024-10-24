import React, { useState, useEffect } from "react";
import FlightSearch from "../components/FlightSearch";
import FlightListings from "../components/FlightListings";

const Booking = () => {
  const [flights, setFlights] = useState(null);

  return (
    <main className="min-h-screen w-screen flex flex-col gap-10 justify-center items-center px-36">
      <FlightSearch setFlights={setFlights} />
      <FlightListings flightData={flights} />
    </main>
  );
};

export default Booking;
