/* eslint-disable react/prop-types */
const FlightCard = ({ flight }) => {
	return (
		<div className="w-full bg-white p-4 rounded-lg shadow-sm border">
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-4">
					{/* Airline Logo */}
					<img
						src={flight.legs[0].carriers.marketing[0].logoUrl}
						alt={`${flight.legs[0].carriers.marketing[0].name} Logo`}
						className="h-6"
					/>
					<div>
						{/* Departure and Arrival Times */}
						<p className="text-lg font-semibold">
							{new Date(flight.legs[0].departure).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}{" "}
							–
							{new Date(flight.legs[0].arrival).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
						<p className="text-sm text-gray-500">
							{flight.legs[0].carriers.marketing[0].name}
						</p>
					</div>
				</div>

				<div className="flex flex-col items-start">
					{/* Total Duration */}
					<div className="font-semibold">
						{Math.floor(flight.legs[0].durationInMinutes / 60)} hr{" "}
						{flight.legs[0].durationInMinutes % 60} min
					</div>
					<div className="text-sm text-gray-500">
						{flight.legs[0].origin.displayCode} –{" "}
						{flight.legs[0].destination.displayCode}
					</div>
				</div>

				<div className="flex flex-col items-start">
					{/* Stops */}
					<div className="font-semibold">{flight.legs[0].stopCount} stop</div>
					<div className="text-sm text-gray-500">
						{flight.legs[0].stopCount > 0 &&
							`Layover: ${flight.legs[0].segments[0].destination.displayCode}`}
					</div>
				</div>

				<div className="text-right">
					{/* Price */}
					<p className="text-green-600 font-semibold">
						{flight.price.formatted}
					</p>
					<p className="text-sm text-gray-500">round trip</p>
				</div>
			</div>
		</div>
	);
};

export default FlightCard;
