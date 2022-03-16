import React from "react";
import RecCard from "../../cards/RecCard/RecCard";
import { Experience } from "../../../data/data";

export default function ExperienceSection() {
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        {Experience.map((value) => (
          <RecCard
            classCard="card-body cc-experience-header"
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
