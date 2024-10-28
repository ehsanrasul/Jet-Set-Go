import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
/>;

// Fix the default icon path issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
	const position = [33.6844, 73.0479]; // Coordinates for Islamabad

	return (
		<div className="py-10 w-9/12 mx-auto bg-white-100 flex flex-col items-start justify-center">
			<div className="w-full max-w-4xl px-6">
				{/* Title */}
				<h1 className="text-2xl md:text-3xl font-semibold text-left text-gray-800">
					Find cheap flights from Islamabad to anywhere
				</h1>

				{/* Map container */}
				<div className="mt-8 h-96 w-full bg-gray-200 rounded-lg shadow-md overflow-hidden">
					{/* Leaflet Map */}
					<MapContainer center={position} zoom={5} className="h-full w-full">
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={position}>
							<Popup>
								Islamabad, Pakistan <br /> Explore flights from here.
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default MapComponent;
