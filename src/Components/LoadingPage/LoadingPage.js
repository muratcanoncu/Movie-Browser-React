import React from "react";

function LoadingPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ width: "100vw", height: "100vh", background: "black" }}
    >
      <h1 className="loadingTitle">FETCHFLIX</h1>
      <h2
        className="loading"
        style={{ color: "#e50914", marginBottom: "300px" }}
      >
        Loading <span className="dot1">.</span> <span className="dot2">.</span>{" "}
        <span className="dot3">.</span>
      </h2>
    </div>
  );
}

export default LoadingPage;
