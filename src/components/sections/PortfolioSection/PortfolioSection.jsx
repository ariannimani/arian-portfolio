import React from "react";
import PortfolioBtn from "../../buttons/PortfolioBtn/PortfolioBtn";
import PortfolioCard from "../../cards/PortfolioCard/PortfolioCard";
import { Work } from "../../../data/data";
import "./PortfolioSection.styles.css";

export default function PortfolioSection(props) {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                <PortfolioBtn
                  linkPortfolio="#web-develipment"
                  classPortfolio="nav-link active"
                  classPortfolioBtn="fa fa-code"
                ></PortfolioBtn>
                <PortfolioBtn
                  linkPortfolio="#working"
                  classPortfolio="nav-link"
                  classPortfolioBtn="fa fa-code-fork"
                ></PortfolioBtn>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div className="col-grid">
                    {Work.map((value) => (
                      <PortfolioCard
                        key={value.id}
                        imageUrl={value.imageUrl}
                        linkEnter={value.linkUrl}
                        projectName={value.title}
                        projectTitle={value.category}
                      ></PortfolioCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
