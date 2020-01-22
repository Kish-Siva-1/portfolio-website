import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs} from '@fortawesome/free-solid-svg-icons'
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

                <div id="rows" className="row text-center">

                    <div id="other" className="col-md-3 flex-column text-center" >
                        <br />
                        <h4>Other</h4>
                        <br />
                        <img id="jestjs" className = "img-fluid portfolio-img" src="/assets/img/JestJS.png" alt="jest" />
                        <br />
                        <br />
                        <img id="sql" className = "img-fluid portfolio-img" src="/assets/img/sql.svg" alt="sql" />
                        <br />
                        <br />
                        <img id="R_Logo" className = "img-fluid portfolio-img" src="/assets/img/R_Logo.svg.png" alt="R_Logo" />
                        <br />
                        <br />
                        <img id="matlab" className = "img-fluid portfolio-img" src="/assets/img/matlab.svg" alt="matlab" />
                    </div>

                    <div className="col-md-3 flex-column text-center">
                        <br />
                        <h4>Databases</h4>
                        <br />
                        <img id="mongodb" className = "img-fluid portfolio-img" src="/assets/img/mongodbBadge.svg" alt="mongodb" /> 
                        <br />
                        <br />
                        <img id="postgreSQL" className = "img-fluid portfolio-img" src="/assets/img/postgreSQL.svg" alt="postgreSQL" />
                        <br />
                        <br />
                    </div>

                    <div id="backend" className="col-md-3 flex-column text-center">
                        <br />
                        <h4>Back End</h4>
                        <br />
                        <img className = "img-fluid portfolio-img" id="nodejs" src="/assets/img/logos/nodejs.svg" alt="nodejs" /> 
                        <br />
                        <br />
                        <img id="rails" className = "img-fluid portfolio-img" src="/assets/img/logos/rails.svg" alt="rails" /> 
                        <br />
                        <br />
                        <img id="ruby" className = "img-fluid portfolio-img" src="/assets/img/logos/ruby.svg" alt="ruby" />
                        <br />
                        <br />
                    </div>

                    <div id="frontend" className="col-md-3 flex-column text-center">
                        <br />
                        <h4>Front End</h4>
                        <br />
                        <img id="html5" className = "img-fluid portfolio-img" src="/assets/img/logos/html5.svg" alt="html5" />
                        <br />
                        <br />
                        <img id="css3" className = "img-fluid portfolio-img" src="/assets/img/logos/css3.svg" alt="css3" />
                        <br />
                        <br />
                        <img id="javascript" className = "img-fluid portfolio-img" src="/assets/img/logos/javascript.svg" alt="javascript" />
                        <br />
                        <br />
                        <img id="react" className = "img-fluid portfolio-img" src="/assets/img/logos/react.svg" alt="react" />
                        <br />
                        <br />
                        <img id="sass" className = "img-fluid portfolio-img" src="/assets/img/logos/sass.svg" alt="sass" />
                        <br />
                        <br />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TechStack;