import React from "react";
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export const About = () => {

    return (
        <section class="page-section mb-0" id="about">
            <div class="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    About
                </h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <div id="about" class="row text-secondary">
                    <p class="lead">I am a software developer from Australia based in Berlin, Germany. I'm passionate about
                    developing modular scalable software that can be optimised to solve complex issues.
                        <br /> <br />
                        I'm most experienced in using PostgresSQL, Ruby on Rails and Node.js to create RESTful APIs and service-oriented architectures (SOA) on the backend with React-Redux and JavaScript for dynamic frontend views.
                        Recently I've worked with Jest-Enzyme for testing and I love learning new technologies.</p>
                </div>

                <div id="around" className="col-lg-4 mb-5 mb-lg-0 mx-auto">
                    <br />
                    <h4 className="text-uppercase text-secondary mb-4">Social Media</h4>
                    <a className="btn btn-outline-secondary btn-social mx-1" href="#">
                        <FontAwesomeIcon icon={faMedium} style={{ fontSize: "1.4em" }} />
                    </a>
                    <a className="btn btn-outline-secondary btn-social mx-1" href="#">
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.4em" }} />
                    </a>
                    <a className="btn btn-outline-secondary btn-social mx-1" href="#">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.4em" }} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;