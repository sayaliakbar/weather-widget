import React from "react";

const HighlightBox = ({ title, value, icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#374151",
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <div style={{ fontSize: "1.25rem" }}>{title}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.25rem",
          alignItems: "center",
        }}
      >
        {icon}
        {value}
      </div>
    </div>
  );
};

export default HighlightBox;
