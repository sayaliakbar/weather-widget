import React from "react";
import {
  AcUnit,
  CalendarMonth,
  Cloud,
  LocationOn,
  WbSunny,
} from "@mui/icons-material";

const Mainweather = ({ weatherData }) => {
  const temperatureCelcius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "city not available";
  const countryName = weatherData?.sys?.country || "country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const renderTemperateIcon = () => {
    if (temperatureCelcius > 23) {
      return (
        <WbSunny
          style={{ marginLeft: "10px", fontSize: "3rem", color: "orange" }}
        />
      );
    } else if (temperatureCelcius < 10) {
      return (
        <AcUnit
          style={{ marginLeft: "10px", fontSize: "3rem", color: "lightblue" }}
        />
      );
    } else {
      return (
        <Cloud
          style={{ marginLeft: "10px", fontSize: "3rem", color: "gray" }}
        />
      );
    }
  };

  return (
    <>
      <div style={{ fontSize: "20px" }}>Now</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {temperatureCelcius}°C{renderTemperateIcon()}
      </div>
      <div>{weatherDescription}</div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarMonth />
          {currentDate}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOn />
          {cityName} {countryName}
        </div>
      </div>
    </>
  );
};

export default Mainweather;
