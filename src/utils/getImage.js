import axios from 'axios';

// Function to fetch a random image from the Unsplash API
const getImage = async () => {
    const url = 'https://api.unsplash.com/photos/random/'
    try {
        // Make an HTTP GET request using axios
        const response = await axios.get(url, {
            // Specify the query parameters for the request
            params: {
                client_id: process.env.REACT_APP_UNSPLASH_CLIENT_ID, // Access key for the Unsplash API 
                query: 'nature', // Query to fetch a random photo related to nature
            },
        });

        // Return the regular-sized image URL from the response data
        return response.data.urls.regular;
    } catch (error) {
        // If an error occurs during the API request, log error to the console
        console.error("An error occurred while fetching the image. An static image is being shown. ");
        // Return null to indicate that no image was fetched
        return null;
    }
};

export default getImage;
