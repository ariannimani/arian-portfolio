import React from "react";

export default function PortfolioBtn(props) {
  return (
    <li className="nav-item">
      <a
        className={props.classPortfolio}
        data-toggle="tab"
        href={props.linkPortfolio}
        role="tablist"
      >
        <i className={props.classPortfolioBtn} aria-hidden="true"></i>
      </a>
    </li>
  );
}
