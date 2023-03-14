import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Project(props) {
  return (
    
      <div
        className="card"
      >
        <Link to={props.deploy} target="_blank">
          <h4 className="card-title">{props.title}</h4>
          <img src={props.image} className="card-img-top" alt={props.title}></img>
          {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          <div className="card-body">
            <p className="card-text">{props.desc}</p>
              <Link to={props.gitlink} target="_blank">
                <button className="github-btn">GitHub Link</button>
              </Link>
          </div>
        </Link>
      </div>
    // </a>
  );
}

export default Project;
