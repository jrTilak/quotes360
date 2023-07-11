# [**Quotes360**](https://quotes360-jrtilak.netlify.app/)
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

<div style="
display: flex;
flex-wrap: wrap;
gap: 10px;
">
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="html" />
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                HTML
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
            alt="css" />
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                CSS
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" alt="node.js" />
        <a target="_blank" href="https://nodejs.org/en">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                Node.js
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
            alt="react.js" />
        <a target="_blank" href="https://react.dev/">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                React.js
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 6px;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://authy.com/wp-content/uploads/npm-logo.png" alt="axios" />
        <a target="_blank" href="https://www.npmjs.com/package/axios">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                Axios
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://res.cloudinary.com/apideck/icons/api-ninjas" alt="api ninjas" />
        <a target="_blank" href="https://api-ninjas.com/">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                Api Ninjas
            </h5>
        </a>
    </div>
    <div style="display: flex;
    align-items: center;
    flex-direction: column;">
        <img style="height: 50px;
    width: 50px;
    border-radius: 100%;" src="https://cdn.icon-icons.com/icons2/3261/PNG/512/unsplash_logo_icon_206651.png"
            alt="unsplash" />
        <a target="_blank" href="https://unsplash.com/developers">
            <h5 style="margin: 0; margin-top:5px;
        padding: 0;">
                Unsplash
            </h5>
        </a>
    </div>
</div>

---
## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

---
## Acknowledgements
- The quote API is provided by API Ninjas.
- The images are fetched from the Unsplash API.
- Special thanks to the authors of the dependencies used in this project.

