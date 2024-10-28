import fs from "fs"; // For interacting with the file system

// File path where data will be saved
const filePath = "./airportData.json";

const fetchAirports = async () => {
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": "c4f82df44amsh8a67a04550b0f8cp124510jsnf8f134c19547",
			"x-rapidapi-host": "flights-sky.p.rapidapi.com",
		},
	};

	try {
		// Make the API call
		const response = await fetch(
			"https://flights-sky.p.rapidapi.com/flights/airports",
			options
		);

		// Check if the request was successful
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}

		// Parse the response JSON
		const data = await response.json();

		// **Save the data to a file**
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		console.log(`Airport data saved to ${filePath}`);

		// Assuming you still want to update state or log the data
		console.log(data.data); // Log the airports data

		console.log(data.data);
	} catch (error) {
		console.error("Error fetching airports:", error.message);
	}
};

// **Invoke the function to execute the API call and file save**
fetchAirports();
