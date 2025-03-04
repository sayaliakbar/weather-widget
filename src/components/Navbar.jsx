import React from "react";
import { FilterDrama, GpsFixed } from "@mui/icons-material";
import { useState } from "react";

import { TextField, Button } from "@mui/material";

const Navbar = ({ onSearch, currentCity }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchCity = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
      setSearchCity("");
    }
  };

  const handleCurrentCity = () => {
    console.log(currentCity);
    onSearch(currentCity);
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
        <h1>Weather Widget</h1>
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
