import React from "react";
import HighlightBox from "./HighlightBox";
import {
  Air,
  WbSunny,
  NightsStay,
  DeviceThermostat,
  Visibility,
  Compress,
  InvertColors,
  Thermostat,
  GpsFixed,
} from "@mui/icons-material";
import { Button, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#374151",

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const TodayHighlights = ({
  weatherData,
  airQualityData,
  currentCity,
  onSearch,
}) => {
  const { main, wind, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const handleCurrentCity = () => {
    onSearch(currentCity);
  };

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main?.humidity}%`, icon: <InvertColors /> },
    {
      title: "Pressure",
      value: `${main?.pressure} hPa`,
      icon: <Compress />,
    },
    {
      title: "Visibility",
      value: `${visibility / 1000} km`,
      icon: <Visibility />,
    },
    {
      title: "Feels Like",
      value: `${main?.feels_like}°C`,
      icon: <Thermostat />,
    },
  ];
  return (
    <div>
      <div
        style={{
          fontSize: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        Today's Highlights
        <Button
          onClick={handleCurrentCity}
          color="inherit"
          sx={{ padding: "0", margin: "0", minWidth: "0px" }}
        >
          <GpsFixed sx={{ padding: "0", margin: "0" }} />
        </Button>
      </div>
      <Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
        <Grid container spacing={2}>
          <Grid size={7}>
            <Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "2rem",
                  alignItems: "center",
                }}
              >
                <p>Air Quality Index</p>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: "green",
                    height: "20px",
                    padding: "4px",
                    borderRadius: "6px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {renderAirQualityDescription(airQualityIndex)}
                </div>
              </div>
              <div style={{ textAlign: "start" }}>
                <Air style={{ fontSize: "2.75rem" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                  }}
                >
                  <div>
                    <p style={{ fontWeight: "bold" }}>CO</p>
                    <p>{co} µg/m³</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>NO</p>
                    <p>{no} µg/m³</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>NO₂</p>
                    <p>{no2} µg/m³</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>O₃</p>
                    <p>{o3} µg/m³</p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid size={5}>
            <Item
              sx={{
                fontSize: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>Sunrise | Sunset</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "2rem",
                }}
              >
                <div>
                  <WbSunny style={{ fontSize: "2.5rem" }} />
                  <p style={{ fontSize: "2rem", marginBottom: "0" }}>
                    {new Date(sys?.sunrise * 1000)
                      .toLocaleTimeString()
                      .replace(/:\d{2} /, " ")}
                  </p>
                </div>
                <div>
                  <NightsStay style={{ fontSize: "2.5rem" }} />
                  <p style={{ fontSize: "2rem", marginBottom: "0" }}>
                    {new Date(sys?.sunset * 1000)
                      .toLocaleTimeString()
                      .replace(/:\d{2} /, " ")}
                  </p>
                </div>
              </div>
            </Item>
          </Grid>

          {highlights.map((highlight, index) => (
            <Grid size={3}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <HighlightBox
                  key={index}
                  title={highlight.title}
                  value={highlight.value}
                  icon={highlight.icon}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TodayHighlights;
