import React from "react";
import { Project } from "./Project";
import { projects } from "./projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export const Portfolio = () => {
  
  const generateProjects = () => {
    return projects.reverse().map(project => <Project key={project.id} {...project} />);
  };

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Projects
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faFolderOpen} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">{generateProjects()}</div>
      </div>
    </section>
  );

};