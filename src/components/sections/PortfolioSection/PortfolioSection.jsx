import React from "react";
import PortfolioBtn from "../../buttons/PortfolioBtn/PortfolioBtn";
import PortfolioCard from "../../cards/PortfolioCard/PortfolioCard";
import { Work } from "../../../data/data";

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
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  {Work.map((value) => (
                    <PortfolioCard
                      key={value.id}
                      linkUrl={value.linkUrl}
                      imageUrl={value.imageUrl}
                      title={value.title}
                      category={value.category}
                    ></PortfolioCard>
                  ))}
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
