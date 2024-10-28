import axios from "axios";

const fetchAirportsByName = async (name) => {
	const options = {
		method: "GET",
		url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
		params: {
			query: name,
			locale: "en-US",
		},
		headers: {
			"x-rapidapi-key": "f7b660b64bmsh79d216c7ea9febap1814aajsn767c65efee7e",
			"x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
};

export { fetchAirportsByName };
