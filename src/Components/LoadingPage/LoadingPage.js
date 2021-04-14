import React from "react";

function LoadingPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ width: "100vw", height: "100vh", background: "black" }}
    >
      <h1
        style={{
          color: "#e50914",
          fontWeight: "bolder",
          marginBottom: "100px",
          fontSize: "3.7rem",
        }}
      >
        FETCHFLIX
      </h1>
      <h2 style={{ color: "#e50914" }}>Loading . . .</h2>
    </div>
  );
}

export default LoadingPage;
