import React from "react";

export default function CircleBtn(props) {
  return (
    <a
      className="btn btn-default btn-round btn-lg btn-icon"
      href={props.enterLink}
      rel="tooltip"
      title={props.titleBtn}
    >
      <i className={props.classBtn}></i>
    </a>
  );
}
