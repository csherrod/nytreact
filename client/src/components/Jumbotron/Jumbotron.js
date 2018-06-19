import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{clear: "both", textAlign: "center", color: "#ffffff",backgroundColor: "#FF6C0F", height: "100px" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
