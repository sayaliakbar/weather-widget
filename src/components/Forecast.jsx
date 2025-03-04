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
      <p style={{ fontSize: "1rem" }}>5 Days Forecast</p>
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
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                {Math.round(item?.main.temp - 273.15)}°C
              </div>
            </div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                {formatDate(item?.dt_txt)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "15px" }}>
                {item?.weather[0].description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
