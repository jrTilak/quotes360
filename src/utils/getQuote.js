import axios from 'axios';

// API endpoint URL
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
// API key for authentication (Replace with your own key)
const apiKey = `bcSSdl+RJcV7LWVCLdFgFw==FiBNviULKwH3uUxp`;
// Category of the quotes to fetch
const category = 'inspirational';

// Function to fetch a quote from the API
const getQuote = async () => {
    try {
        // Configuration object for the request
        const config = {
            method: 'GET', // HTTP method for the request
            url: `${apiUrl}?category=${category}`, // Complete URL with the category query parameter
            headers: {
                'X-Api-Key': apiKey, // Authentication API key
                'Accept': 'image/jpg' // Specify the desired response content type as image/jpg
            },
        };

        // Make the API request using axios and the provided configuration
        const response = await axios(config);
        // Return the response data
        return response.data;
    } catch (error) {
        // If an error occurs during the API request, log the error message from the response
        console.error('Error:', error.response.data);
        // Return null to indicate that no quote was fetched
        return null;
    }
};

// Export the getQuote function as the default export of this module
export default getQuote;
