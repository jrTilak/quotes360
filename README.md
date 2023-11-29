[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://quotes360.thapatilak.com.np/">
    <img src="/public/logo.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Quotes360</h3>

  <p align="center">
    Quotes360 is a simple web application that displays a random quote and an accompanying image. The quote and image are fetched from external APIs.
    <br />
    <a href="https://quotes360.thapatilak.com.np/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a> </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![preview](https://repository-images.githubusercontent.com/642256188/43c892bd-3d29-42c6-9800-111a535b29ce)
----

## Built With
[![React.js][React.js]][React.js-url] [![Javascript][Javascript]][Javascript-url] [![CSS][CSS]][CSS-url] [![HTML][HTML]][HTML-url]

## Features
- Fetches a random quote from the API Ninjas quote API.
- Fetches a random image from the Unsplash API.
- Displays the quote and the image on the web page.
- Provides a "Next" button to fetch and display a new random quote and image.
- Able to select 65+ different categories
---

## Getting Started

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


## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

---
## Acknowledgements
- The quote API is provided by API Ninjas.
- The images are fetched from the Unsplash API.
- Special thanks to the authors of the dependencies used in this project.
---

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jrtilak/quotes360.svg?style=for-the-badge
[contributors-url]: https://github.com/jrtilak/quotes360/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jrtilak/quotes360.svg?style=for-the-badge
[forks-url]: https://github.com/jrtilak/quotes360/network/members
[stars-shield]: https://img.shields.io/github/stars/jrtilak/quotes360.svg?style=for-the-badge
[stars-url]: https://github.com/jrtilak/quotes360/stargazers
[issues-shield]: https://img.shields.io/github/issues/jrtilak/quotes360.svg?style=for-the-badge
[issues-url]: https://github.com/jrtilak/quotes360/issues
[Javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/css
[HTML]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/html
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React.js-url]: https://react.dev/

