import React from "react";
import PortfolioCard from "../../cards/PortfolioCard/PortfolioCard";

export default function PortfolioSection() {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#web-development"
                    role="tablist"
                  >
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#graphic-design"
                    role="tablist"
                  >
                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#Photography"
                    role="tablist"
                  >
                    <i className="fa fa-camera" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <PortfolioCard
                    linkEnter="./"
                    projectName="Startup Project"
                    projectTitle="Web Development"
                  ></PortfolioCard>
                  <PortfolioCard
                    linkEnter="./"
                    projectName="Startup Project"
                    projectTitle="Web Development"
                  ></PortfolioCard>
                </div>
                <div className="col-md-6">
                  <PortfolioCard
                    linkEnter="./"
                    projectName="Startup Project"
                    projectTitle="Web Development"
                  ></PortfolioCard>
                  <PortfolioCard
                    projectName="Startup Project"
                    projectTitle="Web Development"
                  ></PortfolioCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
