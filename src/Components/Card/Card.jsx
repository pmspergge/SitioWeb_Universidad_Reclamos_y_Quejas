import React from "react";
import "./card.css";
const Card = ({ title, cant, details, icon }) => {
  return (
    <div className="col-xl-3 col-md-6 container-card-info">
      <div className="card prod-p-card bg-c-red shadow-sm">
        <div className="card-body">
          <div className="row align-items-center m-b-25">
            <div className="col">
              <h6 className="m-b-5">{title}</h6>
              <h3 className="m-b-0">{cant}</h3>
            </div>
            <div className="col-auto">{icon}</div>
          </div>
          <p className="m-b-0 details-container">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
