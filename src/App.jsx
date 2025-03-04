import "./App.css";
import Mainweather from "./components/Mainweather";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState("quetta");
  const [weatherData, setWeathterData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = () => {
    fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeathterData(data);
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
          <div style={{ flex: "1", marginRight: "10px" }}>
            <Mainweather weatherData={weatherData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
