import React from "react";

export default function MainBtn(props) {
  return (
    <a
      className={props.classNameBtn}
      href={props.enterLink}
      data-aos="zoom-in"
      data-aos-anchor="data-aos-anchor"
    >
      {props.textBtn}
    </a>
  );
}
