import React from "react";
import './homePage.css'

export const Home = () => {
  return (

    <header className="masthead bg-primary text-white text-center">
      <div id="face" className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="assets/portrait.png" alt="" />
        <h1 className="masthead-heading">Hi. I'm Kishandth.</h1>
        <br />
        <p className="masthead-subheading font-weight-light">
          I'm a full stack engineer.
        </p>
      </div>
    </header>

  );
};

export default Home;