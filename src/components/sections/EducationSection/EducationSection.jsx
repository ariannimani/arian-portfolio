import React from "react";
import RecCard from "../../cards/RecCard/RecCard";
import { Education } from "../../../data/data";

export default function EducationSection() {
  return (
    <div className="section">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        {Education.map((value) => (
          <RecCard
            classCard="card-body cc-education-header"
            nameCard={value.name}
            yearsCard={value.year}
            titleCard={value.title}
            categoryCard={value.category}
            textCard={value.text}
          ></RecCard>
        ))}
      </div>
    </div>
  );
}
