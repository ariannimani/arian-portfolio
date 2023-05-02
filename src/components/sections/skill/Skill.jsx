import React from "react";
import { SkillsCard } from "components/cards";
import { Skills } from "data/data";

function SkillSection() {
  return (
    <div className="section" id="skill">
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        <div
          className="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="card-body">
            <div className="row">
              {Skills.map((value) => (
                <SkillsCard
                  key={value.id}
                  language={value.language}
                  percentage={value.percentage}
                />
              ))}
            </div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
