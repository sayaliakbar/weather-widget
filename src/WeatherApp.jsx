import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    name: "Lahore",
    temp: 6.52,
    tempMin: 3.1,
    tempMax: 9.1,
    humidity: 37,
    feelsLike: 5.37,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weatherApp">
      <h1>Weather App using Material UI</h1>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox weatherInfo={weatherInfo}></InfoBox>
    </div>
  );
}
