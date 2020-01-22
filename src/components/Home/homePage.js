import React from "react";

export const Home = () => {
  return (

    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="assets/avataaars.svg" alt="" />
        <h1 className="masthead-heading mb-0">Hi. I'm Kishandth.</h1>
        <br />
        <p className="masthead-subheading font-weight-light mb-0">
          I'm a full stack engineer.
        </p>
        {/* <div className="col-lg-4 mb-5 mb-lg-0 ">
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fab fa-fw fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fab fa-fw fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fab fa-fw fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#">
            <i className="fab fa-fw fa-dribbble"></i>
          </a>
        </div> */}
      </div>
    </header>

  );
};

export default Home;