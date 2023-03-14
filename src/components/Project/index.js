import React from "react";
import "./style.css";

function Project(props) {
  return (
    <a href={props.deploy} target="_blank">
      <div
        className="card"
      >
      {/* <img src={require("" + props.image)} className="card-img-top" alt={props.title}></img> */}
      {/* <img src={props.image} className="card-img-top" alt={props.title}></img> */}
      <p>{props.image}</p>
        {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
