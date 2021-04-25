import React from "react";

function ContactUs() {
  return (
    <div className="contactPage d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-5 text-white">Send Us Your Message!</h1>
      <form className="d-flex flex-column justify-content-lg-between text-center py-3 px-1">
        <label>Name</label>
        <input></input>
        <label>Username</label>
        <input></input>
        <label>E-mail</label>
        <input></input>
        <label>Message</label>
        <textarea></textarea>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default ContactUs;
