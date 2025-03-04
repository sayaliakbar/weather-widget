import React from "react";

const HighlightBox = ({ title, value, icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#374151",
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginTop: "11px",
        flex: "1",
      }}
    >
      <p>{title}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2rem",
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
