import React from "react";
import moment from 'moment'

export const BlogCard = props => {
   
    const handleClick = url => {
        var win = window.open(url, "_blank");
        win.focus();
    };

    const getDate = () => {
        let date = moment(props.pubDate).format("DD/MMM/YYYY")
        return date
    };

    return (

        <div className="card mb-5" style={{ minWidth: "16rem" }} onClick={() => handleClick(props.link)} >
            <img src={props.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mt-auto" style={{ color: "black" }}>
                    {props.title}
                </h5>
                <p className="card-text">
                    <small className="text-muted">Published on {getDate()}</small>
                </p>
            </div>
        </div>

    );

};