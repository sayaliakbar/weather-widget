# Weather Widget

Weather Widget is a **responsive web application** built with **React** and **Material UI**, designed to fetch and display real-time weather data using the **OpenWeatherMap API**.  
Users can view **current weather conditions, air quality index**, and a **5-day weather forecast** for any searched city.

---

## 🚀 Features

- ✅ **Current Weather** – Displays temperature, weather description, city name, and country.
- ✅ **Air Quality Index (AQI)** – Shows AQI levels with details on pollutants.
- ✅ **5-Day Forecast** – Provides a 5-day weather outlook with temperature and conditions.
- ✅ **Geolocation Support** – Fetches weather data for the user's current location automatically.
- ✅ **City Search** – Allows users to search for weather information by entering a city name.

---

## Screenshot

![Image](https://github.com/user-attachments/assets/55f5375e-bfda-4acd-9510-6a31352db844)

## 📁 Project Structure

```plaintext
weather-widget/
│── .env
│── .gitignore
│── eslint.config.js
│── index.html
│── LICENSE
│── package.json
│── public/
│   ├── favicon.ico
│── README.md
│── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── HighlightBox.jsx
│   │   ├── MainWeather.jsx
│   │   ├── Navbar.jsx
│   │   ├── TodayHighlights.jsx
│   ├── main.jsx
│── vite.config.js

```

## 🛠 Installation

1. Clone the repository

```sh

git clone https://github.com/your-username/weather-widget.git
cd weather-widget
```

2. Install dependencies

```sh
npm install
```

3. Set up environment variables
   Create a .env file in the root directory and add your OpenWeatherMap API key:

```env
VITE_API_URL=https://api.openweathermap.org/data/2.5
VITE_API_KEY=your_api_key_here
```

## 🚀 Usage

Start the development server:

```sh
npm run dev
```

---

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Starts the development server.           |
| `npm run build`   | Builds the project for production.       |
| `npm run lint`    | Runs ESLint to check for linting errors. |
| `npm run preview` | Previews the production build.           |

---

## Links

- Live Site: https://weatherwidgetbysayaliakbar.netlify.app

---

## Author

- GitHub: https://github.com/sayaliakbar
- LinkedIn: https://www.linkedin.com/in/sayaliakbar

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sayaliakbar/weather-widget?tab=MIT-1-ov-file) file for details.

---

## 🙌 Acknowledgements

[React](https://react.dev)
[Material UI](https://mui.com/material-ui/?srsltid=AfmBOorbBC1CTglRfISXpJNforbOPSSNYVT0JURH5VbLvdJbRA3oB4eQ)
[OpenWeatherMap API](https://openweathermap.org/current)
[Axios](https://axios-http.com/docs/intro)
