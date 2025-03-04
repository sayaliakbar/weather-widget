import React from "react";
import { FilterDrama, GpsFixed } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

// import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { TextField, Button } from "@mui/material";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearchCity = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
      setSearchCity("");
    }
  };

  const handleCurrentCity = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios
            .get(
              `${apiURL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            )
            .then((response) => {
              onSearch(response.data.name);
            });
        },
        (error) => {
          console.error("Error retrieving location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
        paddingTop: "10px",
        paddingLeft: "30px",
        padddingRight: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <FilterDrama />
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather App</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <TextField
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            maxWidth: "22rem",
          }}
          variant="outlined"
          placeholder="Search city"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <Button
          style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
          variant="contained"
          onClick={handleSearchCity}
        >
          Search
        </Button>
      </div>
      <Button
        onClick={handleCurrentCity}
        variant="contained "
        style={{
          borderRadius: "6px",
          backgroundColor: "#4B5550",
          color: "white",
        }}
      >
        <GpsFixed />
        Current Location
      </Button>
    </nav>
  );
};

export default Navbar;
