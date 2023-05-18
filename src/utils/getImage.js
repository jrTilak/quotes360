import axios from 'axios';

// Function to fetch a random image from the Unsplash API
const getImage = async () => {
    try {
        // Make an HTTP GET request using axios
        const response = await axios.get('https://api.unsplash.com/photos/random/', {
            // Specify the query parameters for the request
            params: {
                client_id: `Jaqt7NHmBDOQEjaQiup91_mqQs0nN7hWVezCc4FNa-w`, // Access key for the Unsplash API (Replace with your own)
                query: 'nature', // Query to fetch a random photo related to nature
            },
            // Set the headers for the request
            headers: {
                Accept: '*/*' // Accept any response content type
            },
        });

        // Return the regular-sized image URL from the response data
        return response.data.urls.regular;
    } catch (error) {
        // If an error occurs during the API request, log the error to the console
        console.error(error);
        // Return null to indicate that no image was fetched
        return null;
    }
};

// Export the getImage function as the default export of this module
export default getImage;
