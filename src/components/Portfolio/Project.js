import React from "react";
import { ProjectModal } from "./ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Project = props => {

  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="portfolio-item mx-auto"
        data-toggle="modal"
        data-target={`#portfolioModal${props.id}`}
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            < FontAwesomeIcon icon={faPlus} size="3x" />
          </div>
        </div>
        <img
          className="img-fluid"
          src={`/assets/img/${props.image_name}`}
          alt=""
        />
      </div>
      <ProjectModal {...props} />
    </div>
  );

};