import React from "react";

export default function RecCard(props) {
  return (
    <div className="card">
      <div className="row">
        <div
          className="col-md-3 bg-primary"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-duration="500"
        >
          <div className={props.classCard}>
            <p>{props.yearsCard}</p>
            <div className="h5">{props.nameCard}</div>
          </div>
        </div>
        <div
          className="col-md-9"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-duration="500"
        >
          <div className="card-body">
            <div className="h5">{props.titleCard}</div>
            <p className="category">{props.categoryCard}</p>
            <p>{props.textCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
