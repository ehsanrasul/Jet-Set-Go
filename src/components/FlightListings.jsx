/* eslint-disable react/prop-types */
import FlightCard from "./FlightCard";

const FlightListings = ({ flights }) => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			{flights.map((flight) => (
				<FlightCard key={flight.id} flight={flight} />
			))}
		</div>
	);
};

export default FlightListings;
