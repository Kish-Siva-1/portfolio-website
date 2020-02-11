import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Stack.css"

library.add(fab);

export const Stack = props => {

    const addDefaultSrc = (ev) => {
        ev.target.src = `./assets/img/logos/${props.tech}.png`
    };

    return (
        <div
            id="icon"
            className={`d-flex pb-5 align-items-center`}
            style={{ maxHeight: "60px", maxWidth: "60px" }}
        >
        <figure>
            <img
                className="img-fluid"
                onError={addDefaultSrc}
                src={`./assets/img/logos/${props.tech}.svg`}
                alt=""
            />
            <figcaption className="technology-name text-capitalize">
                {props.tech}
            </figcaption>
        </figure>
        </div>
    );
};