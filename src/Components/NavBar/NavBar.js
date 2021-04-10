import React from "react";
function NavBar() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 w-100">
      <h1>FETCHFLIX</h1>
      <div className="d-flex justify-content-between w-25">
        <h4>Profile</h4>
        <h4>My List</h4>
        <h4>About Us</h4>
      </div>
      <h4>Sign Out</h4>
    </nav>
  );
}

export default NavBar;
