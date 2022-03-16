import React from "react";
export default function PortfolioCard(props) {
  return (
    <div
      className="cc-porfolio-image img-raised"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <a href={props.linkUrl}>
        <figure className="cc-effect">
          <img
            src={require("../../../images/" + props.imageUrl)}
            alt="Portfolio"
          />
          <figcaption>
            <div className="h4">{props.title}</div>
            <p>{props.category}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}
