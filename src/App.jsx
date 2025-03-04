import "./App.css";
import Mainweather from "./components/Mainweather";
import Navbar from "./components/Navbar";
import TodayHighlights from "./components/TodayHighlights";
import Forecast from "./components/Forecast";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState("quetta");
  const [weatherData, setWeathterData] = useState("quetta");
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchForecastData = (lat, lon) => {
    axios
      .get(`${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((response) => {
        setFiveDayForecast(response.data);
      })
      .catch((error) =>
        console.log("Error fetching the forecast data:", error)
      );
  };

  const fetchAirQualityData = (lat, lon) => {
    axios
      .get(`${apiUrl}/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then((response) => {
        setAirQualityData(response.data.list[0]);
      })
      .catch((error) =>
        console.log("Error fetching the air quality data:", error)
      );
  };

  const fetchWeatherData = () => {
    axios
      .get(`${apiUrl}/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        setWeathterData(response.data);
        fetchAirQualityData(response.data.coord.lat, response.data.coord.lon);
        fetchForecastData(response.data.coord.lat, response.data.coord.lon);
      });
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {weatherData && (
        <div style={{ display: "flex", padding: "30px", gap: "20px" }}>
          <div style={{}}>
            <Mainweather weatherData={weatherData} />
            <Forecast forecastData={fiveDayForecast} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TodayHighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
