import axios from "axios";

const getFlights = async (
	originSkyId,
	destinationSkyId,
	originEntityId,
	destinationEntityId,
	departureDate,
	returnDate,
	cabinClass,
	adults,
	childrens,
	infantsOnSeat,
	infantsOnLap
) => {
	const options = {
		method: "GET",
		url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
		params: {
			originSkyId: originSkyId,
			destinationSkyId: destinationSkyId,
			originEntityId: originEntityId,
			destinationEntityId: destinationEntityId,
			date: departureDate,
			cabinClass: cabinClass,
			adults: adults,
			childrens: childrens,
			infants: infantsOnSeat + infantsOnLap,
			sortBy: "best",
			currency: "USD",
			market: "en-US",
			countryCode: "US",
			...(returnDate && { returnDate: returnDate }),
		},
		headers: {
			"x-rapidapi-key": "f7b660b64bmsh79d216c7ea9febap1814aajsn767c65efee7e",
			"x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export { getFlights };
