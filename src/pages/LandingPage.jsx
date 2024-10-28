import MapComponent from "../components/MapComponent";
import FlightListings from "../components/FlightListings";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker
import { useState, useEffect } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import PassengerSelector from "../components/PassengerSelector";

import airportsData from "../../airportData.json";

import { fetchAirportsByName } from "../services/airports";
import { getFlights } from "../services/flights";

import FlightCard from "../components/FlightCard";

const CabinClasses = ["Economy", "Premium Economy", "Business", "First"];
// const TripTypes = ["Round trip", "One way"];

const LandingPage = () => {
  const [airports] = useState(airportsData.data);

  const [filteredDepartureAirports, setFilteredDepartureAirports] = useState(
    []
  );
  const [filteredArrivalAirports, setFilteredArrivalAirports] = useState([]);

  // Trip Details
  const [travelDate, setTravelDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const [selectedDepartureAirport, setSelectedDepartureAirport] =
    useState(null);
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState(null);

  const [tripType, setTripType] = useState("Round trip");
  const [cabinClass, setCabinClass] = useState("Economy");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsInSeat, setInfantsInSeat] = useState(0);
  const [infantsOnLap, setInfantsOnLap] = useState(0);

  // Flights Data
  const [flights, setFlights] = useState(null);

  // Filter airports for departure
  const handleFilterDepartureAirports = (e) => {
    const search = e.target.value.trim().toLowerCase();
    const filtered = airports
      .filter((airport) => {
        const name = airport.name.toLowerCase();
        const location = airport.location.toLowerCase();
        return name.startsWith(search) || location.startsWith(search);
      })
      .slice(0, 10); // Show only top 10 results
    setFilteredDepartureAirports(filtered);
  };

  // Filter airports for arrival
  const handleFilterArrivalAirports = (e) => {
    const search = e.target.value.trim().toLowerCase();
    const filtered = airports
      .filter((airport) => {
        const name = airport.name.toLowerCase();
        const location = airport.location.toLowerCase();
        return name.startsWith(search) || location.startsWith(search);
      })
      .slice(0, 10); // Show only top 10 results
    setFilteredArrivalAirports(filtered);
  };

  useEffect(() => {
    console.log("Airports Data Loaded:", airports);
  }, [airports]);

  // Handle the date change for the date picker
  const handleDateChange = (date) => {
    setTravelDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const handleSearch = async () => {
    console.log("Searching for flights...");

    const departureAirport = airports.find((airport) =>
      airport.name.includes(selectedDepartureAirport)
    );

    const arrivalAirport = airports.find((airport) =>
      airport.name.includes(selectedArrivalAirport)
    );

    const searchedDepartureAirport = await fetchAirportsByName(
      selectedDepartureAirport
    );

    const searchedArrivalAirport = await fetchAirportsByName(
      selectedArrivalAirport
    );
    // Filtering the fetched airports based on skyId
    const filteredDepartureAirport = searchedDepartureAirport.find(
      (airport) => airport.skyId === departureAirport.skyId
    );

    const filteredArrivalAirport = searchedArrivalAirport.find(
      (airport) => airport.skyId === arrivalAirport.skyId
    );

    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    const departureDate = formatDate(travelDate);
    const returnDateFormatted = returnDate ? formatDate(returnDate) : null;

    try {
      const flights = await getFlights(
        filteredDepartureAirport.skyId,
        filteredArrivalAirport.skyId,
        filteredDepartureAirport.entityId,
        filteredArrivalAirport.entityId,
        departureDate,
        returnDateFormatted,
        cabinClass.toLowerCase().replace(" ", "_"),
        adults,
        children,
        infantsInSeat,
        infantsOnLap
      );

      console.log("Flights:", flights);
      setFlights(flights);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="grid place-items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">Flights</h1>
      </div>

      <div className="relative w-8/12 mx-auto p-6 bg-white rounded-md shadow-lg">
        <div className="flex justify-start items-center space-x-4">
          <div className="w-36">
            <Listbox value={tripType} onChange={setTripType}>
              <ListboxButton
                className={clsx(
                  "relative block w-full rounded-lg bg-gray-100 py-1.5 pr-8 pl-3 text-left text-sm/6 text-gray-700",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                {tripType}
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-gray-700"
                  aria-hidden="true"
                />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--button-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                <ListboxOption
                  key={1}
                  value={"Round trip"}
                  className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
                >
                  <CheckIcon className="invisible size-4 fill-gray-800 group-data-[selected]:visible" />
                  <div className="text-sm/6 text-gray-700">Round trip</div>
                </ListboxOption>

                <ListboxOption
                  key={2}
                  value={"One way"}
                  className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
                >
                  <CheckIcon className="invisible size-4 fill-gray-800 group-data-[selected]:visible" />
                  <div className="text-sm/6 text-gray-700">One way</div>
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>

          <div>
            <PassengerSelector
              adults={adults}
              childs={children}
              infantsInSeat={infantsInSeat}
              infantsOnLap={infantsOnLap}
              setAdults={setAdults}
              setChildren={setChildren}
              setInfantsInSeat={setInfantsInSeat}
              setInfantsOnLap={setInfantsOnLap}
            />
          </div>

          {/* Cabin Class */}
          <div className="min-w-36">
            <Listbox value={cabinClass} onChange={setCabinClass}>
              <ListboxButton
                className={clsx(
                  "relative block w-full rounded-lg bg-gray-100 py-1.5 pr-8 pl-3 text-left text-sm/6 text-gray-700",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              >
                {cabinClass}
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-gray-700"
                  aria-hidden="true"
                />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                transition
                className={clsx(
                  "w-[var(--button-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
                  "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                {CabinClasses.map((cabin) => (
                  <ListboxOption
                    key={cabin}
                    value={cabin}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
                  >
                    <CheckIcon
                      className="invisible size-4 fill-gray-800 group-data-[selected]:visible"
                      aria-hidden="true"
                    />
                    <div className="text-sm/6 text-gray-700">{cabin}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Departure Combobox */}
          <div className="col-span-1 relative">
            <Combobox
              value={selectedDepartureAirport}
              onChange={setSelectedDepartureAirport}
            >
              <div className="relative">
                <ComboboxInput
                  value={selectedDepartureAirport}
                  onChange={handleFilterDepartureAirports}
                  className="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-black shadow-sm focus:outline-none"
                  placeholder="Where from?"
                  autoComplete="off"
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ComboboxButton>
              </div>
              <ComboboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
                {filteredDepartureAirports.map((airport) => (
                  <ComboboxOption
                    key={airport.skyId}
                    value={airport.name.trim().split(" ")[0]}
                  >
                    <button className="mb-2 w-full hover:bg-gray-400">
                      {airport.name} ({airport.skyId})
                    </button>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>

          {/* Arrival Combobox */}
          <div className="col-span-1 relative">
            <Combobox
              value={selectedArrivalAirport}
              onChange={setSelectedArrivalAirport}
            >
              <div className="relative">
                <ComboboxInput
                  onChange={handleFilterArrivalAirports}
                  className="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-md text-gray-700 placeholder-black shadow-sm focus:outline-none"
                  placeholder="Where to?"
                  autoComplete="off"
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ComboboxButton>
              </div>
              <ComboboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
                {filteredArrivalAirports.map((airport) => (
                  <ComboboxOption
                    key={airport.skyId}
                    value={airport.name.trim().split(" ")[0]}
                  >
                    <button className="mb-2 w-full hover:bg-gray-400">
                      {airport.name} ({airport.skyId})
                    </button>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>

          {/* Departure Date Picker */}
          <div className="col-span-1">
            <DatePicker
              selected={travelDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText="Departure"
              endDate={returnDate}
              minDate={new Date()}
              className="w-full text-black px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 placeholder-gray-400"
              calendarClassName="rounded-lg shadow-lg border border-gray-300"
              dayClassName={() => "hover:bg-blue-100 focus:bg-blue-100"}
              popperClassName="rounded-lg shadow-lg"
            />
          </div>

          {/* Return Date Picker */}
          {tripType === "Round trip" && (
            <div className="col-span-1">
              <DatePicker
                selected={returnDate}
                onChange={handleReturnDateChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="Return"
                disabled={!travelDate}
                minDate={travelDate}
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 placeholder-gray-400"
                calendarClassName="rounded-lg shadow-lg border border-gray-300"
                dayClassName={() => "hover:bg-blue-100 focus:bg-blue-100"}
                popperClassName="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center space-x-4">
          <button
            className="absolute -bottom-4 right-1/2 rounded-full px-4 py-2 bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus:outline-none flex items-center mx-auto"
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
            Explore
          </button>
        </div>
      </div>

      {flights && (
        <section className="w-9/12 mx-auto py-10">
          <FlightListings flights={flights.data.itineraries} />
        </section>
      )}

      <MapComponent />
    </div>
  );
};

export default LandingPage;
