import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import "./techstack.css"

export const TechStack = () => {
    return (
        <section class="page-section bg-primary text-white mb-0" id="techstack">
            <div class="container">

                <h2 class="page-section-heading text-center text-uppercase text-white">TechStack</h2>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <FontAwesomeIcon icon={faCogs} />
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* update with icons 8 */}
                <div id="rows" className="row text-center">

                    <div id="other" className="col-md-3 flex-column text-center bg-secondary" >
                        <br />
                        Other
                        <br />
                        <br />
                        <img id="jestjs" src="/assets/img/JestJS.png" alt="jest" />
                        <br />
                        <br />
                        <img id="sql" src="/assets/img/sql.svg" alt="sql" />
                        <br />
                        <br />
                        <img id="R_Logo" src="/assets/img/R_Logo.svg.png" alt="R_Logo" />
                        <br />
                        <br />
                        <img id="matlab" src="/assets/img/matlab.svg" alt="matlab" />
                        <br />
                        <img id="sas" src="/assets/img/sas-logo.png" alt="sas" />
                    </div>

                    <div className="col-md-3 flex-column text-center bg-secondary">
                        <br />
                        Databases
                        <br />
                        <br />
                        <img id="mongodb" src="/assets/img/mongodbBadge.svg" alt="mongodb" /> 
                        <br />
                        <br />
                        <img id="postgreSQL" src="/assets/img/postgreSQL.svg" alt="postgreSQL" />
                        <br />
                        <br />
                    </div>

                    <div className="col-md-3 flex-column text-center bg-secondary">
                        <br />
                        Back End
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faNodeJs} size="3x" />
                        <br />
                        <br />
                        <img id="rails" src="/assets/img/rails.png" alt="rails" /> 
                        <br />
                        <br />
                        <img id="ruby" src="/assets/img/ruby.svg.png" alt="ruby" />
                        <br />
                        <br />
                    </div>

                    <div id="frontend" className="col-md-3 flex-column text-center bg-secondary">
                        <br />
                        Front End
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faHtml5} size="3x" />
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faJsSquare} size="3x" />
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faSass} size="3x" />
                        <br />
                        <br />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TechStack;