import React, { useEffect, useState } from 'react';
import getQuote from './utils/getQuote';
import getImage from './utils/getImage';

function App() {
  // State variables to hold the quote, author, image URL, and loading status
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg');
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch quote and image data
  const fetchData = async () => {
    setIsLoading(true); // Set loading status to true
    let imageUrl = await getImage(); // Fetch image URL
    let quoteData = await getQuote(); // Fetch quote data

    // Handle cases where quoteData or imageUrl is null (error occurred during API request)
    if (quoteData === null) {
      quoteData = [{
        quote: 'API KEY Exhausted\nTry Again Later!!',
        author: ''
      }];
    }
    if (imageUrl === null) {
      imageUrl = 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/dy179t.jpg?w=1600&h=900';
    }

    if (quoteData[0].quote.length >= 250) {
      quoteData = await getQuote()
    }

    // Update state with fetched data
    setQuote(quoteData[0].quote);
    setAuthor(quoteData[0].author);
    setImage(imageUrl);
    setIsLoading(false); // Set loading status to false
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array to run the effect only once

  // Handler for the "Next" button click
  const handleNextClick = () => {
    fetchData(); // Fetch new quote and image data
  };

  return (
    <>
      <main>
        <div id="quote" style={{ "backgroundImage": `url(${image})` }}>
          <h1>Quotes360</h1>
          <h2>{quote}</h2>
          <p className="author">{author}</p>
          <button className="button-61" onClick={handleNextClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Next'}
          </button>
        </div>
      </main>
      <footer className="me">
        <a target='_blank' rel='noreferrer' href="https://github.com/jrTilak/quotes360">&copy;jrTilak</a>
      </footer>
    </>
  );
}

export default App;
