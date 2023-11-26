# [**Quotes360**](https://quotes360.netlify.app/)
### Created By: [jrTilak](https://github.com/jrTilak)

Quotes360 is a simple web application that displays a random quote and an random accompanying image. The quote and image are fetched from external APIs: [API Ninjas](https://api-ninjas.com/) for quotes and [Unsplash](https://unsplash.com/developers) for images.

![preview](https://repository-images.githubusercontent.com/642256188/43c892bd-3d29-42c6-9800-111a535b29ce)

---
## Features
- Fetches a random quote from the API Ninjas quote API.
- Fetches a random image from the Unsplash API.
- Displays the quote and the image on the web page.
- Provides a "Next" button to fetch and display a new random quote and image.
- Able to select 65+ different categories
---

## Installation
1. Clone the repository to your local machine:
```bash
git clone https://github.com/jrTilak/quotes360.git
```

1. Navigate to the project directory:
```bash
cd quotes360
```

2. Install the dependencies:
```bash
npm install
```
3. Include all api keys in a .env file in the root directory:
```bash
REACT_APP_UNSPLASH_CLIENT_ID = <YOUR_UNSPLASH_CLIENT_ID>
REACT_APP_API_NINJA_QUOTES_API = <YOUR_API_NINJA_QUOTES_API>
```
4. Start the development server:
```bash
npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application. 
---
## Technologies Used (Languages, Libraries, APIS and Frameworks)

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Node.js](https://nodejs.org/en/)
- [React.js](https://react.dev/)
- [Axios](https://www.npmjs.com/package/axios)
- [Unsplash API](https://unsplash.com/developers)
- [API Ninjas](https://api-ninjas.com/)

---
## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

---
## Acknowledgements
- The quote API is provided by API Ninjas.
- The images are fetched from the Unsplash API.
- Special thanks to the authors of the dependencies used in this project.

