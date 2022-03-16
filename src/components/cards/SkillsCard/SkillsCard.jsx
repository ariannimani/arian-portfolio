import React from "react";

export default function SkillsCard(props) {
  return (
    <div className="col-md-6">
      <div className="progress-container progress-primary">
        <span className="progress-badge">{props.language}</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            data-aos="progress-full"
            data-aos-offset="10"
            data-aos-duration="2000"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: props.percentage }}
          ></div>
          <span className="progress-value">{props.percentage}</span>
        </div>
      </div>
    </div>
  );
}
