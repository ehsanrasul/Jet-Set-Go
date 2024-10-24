// import React from "react";

// const FlightListings = ({ flightData }) => {
//   return (
//     <div className="flight-listings w-full">
//       {flightData && flightData.itineraries.length > 0 ? (
//         <div className="flex flex-col justify-center items-center gap-5 w-full">
//           {flightData.itineraries.map((itinerary) => (
//             <div
//               key={itinerary.id}
//               className=" bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-4xl flex justify-between items-center"
//             >
//               {/* Image (Airline logo) */}
//               {itinerary.legs.length > 0 && (
//                 <div className="flex-shrink-0">
//                   <img
//                     src={itinerary.legs[0].carriers.marketing[0].logoUrl}
//                     alt={itinerary.legs[0].carriers.marketing[0].name}
//                     className="h-12 w-12"
//                   />
//                 </div>
//               )}

//               {/* Flight Details */}
//               <div className="flex-1 px-6">
//                 {itinerary.legs.map((leg) => (
//                   <div key={leg.id} className="text-gray-700">
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="font-semibold">Origin</p>
//                         <p>
//                           {leg.origin.name} ({leg.origin.displayCode})
//                         </p>
//                         <p>{new Date(leg.departure).toLocaleString()}</p>
//                       </div>

//                       <div className="flex flex-col justify-center items-end">
//                         <p className="font-semibold">Destination</p>
//                         <p>
//                           {leg.destination.name} ({leg.destination.displayCode})
//                         </p>
//                         <p>{new Date(leg.arrival).toLocaleString()}</p>
//                       </div>
//                     </div>

//                     <p className="mt-2">
//                       Duration: {Math.floor(leg.durationInMinutes / 60)}h{" "}
//                       {leg.durationInMinutes % 60}m | Stops: {leg.stopCount}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Price */}
//               <div className="text-green-500 text-lg font-bold h-full">
//                 {itinerary.price.formatted}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p class="flex justify-center items-center"></p>
//       )}
//     </div>
//   );
// };

// export default FlightListings;

import React from "react";

const FlightListing = () => {
  return (
    <div className="bg-white p-6">
      <div className="container mx-auto space-y-2">
        {/* Flight Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="/airline-logo-1.png"
                alt="Airline Logo"
                className="h-6"
              />
              <div>
                <p className="text-lg font-semibold">7:55 AM – 4:55 PM</p>
                <p className="text-sm text-gray-500">
                  British Airways, Vueling
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold">13 hr</div>
              <div className="text-sm text-gray-500">ISB – ORY</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold">1 stop</div>
              <div className="text-sm text-gray-500">2 hr 20 min LGW</div>
            </div>

            <div className="flex flex-col items-start">
              <div className="font-semibold">827 kg CO2e</div>
              <div className="text-sm text-gray-500">Avg emissions</div>
            </div>
            <div className="flex justify-between items-center mt-1 text-xs text-gray-500"></div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">PKR 706,975</p>
              <p className="text-sm text-gray-500">round trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListing;
