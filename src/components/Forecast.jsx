import React from "react";

const Forecast = ({ forecastData }) => {
  const fiveDayForecast = [
    forecastData?.list[0],
    forecastData?.list[8],
    forecastData?.list[16],
    forecastData?.list[24],
    forecastData?.list[32],
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    let formattedDate = date
      .toLocaleString("en-GB", { day: "2-digit", month: "short" })
      .replace(",", "");
    return formattedDate;
  };
  return (
    <>
      <div
        style={{
          textAlign: "start",
          fontSize: "1.25rem",
          color: "white",
        }}
      >
        5 Days Forecast
      </div>
      <div
        style={{
          backgroundColor: "#374151",
          color: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          marginTop: "12px",
          display: "flex",
          flexDirection: "column",
          height: "full",
          gap: "1rem",
        }}
      >
        {fiveDayForecast.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div>{Math.round(item?.main.temp - 273.15)}°C</div>
            </div>
            <div>
              <div>{formatDate(item?.dt_txt)}</div>
            </div>
            <div>
              <div>{item?.weather[0].description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
