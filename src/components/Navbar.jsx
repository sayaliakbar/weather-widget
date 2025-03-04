import React from "react";
import { FilterDrama, GpsFixed } from "@mui/icons-material";

// import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { TextField, Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
        padding: "10px",
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
            width: "22rem",
          }}
          variant="outlined"
          placeholder="Search city"
        />
        <Button
          style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
          variant="contained"
        >
          Search
        </Button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          fontSize: "16px",
          fontWeight: "700",
          backgroundColor: "#4B5550",
          height: "35px",
          width: "150px",
          color: "white",
          gap: "2px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GpsFixed />
        <p style={{ fontSize: "14px" }}>Current Location</p>
      </div>
    </nav>
  );
};

export default Navbar;
