import React from "react";

export default function PortfolioCard(props) {
  return (
    <div
      className="cc-porfolio-image img-raised"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <a href={props.linkEnter}>
        <figure className="cc-effect">
          <img src={props.imageUrl} alt="Image3" />
          <figcaption>
            <div className="h4">{props.projectName}</div>
            <p>{props.projectTitle}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
