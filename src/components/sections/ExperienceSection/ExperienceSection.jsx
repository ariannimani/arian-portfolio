import React from "react";
import RecCard from "../../cards/RecCard/RecCard";

export default function ExperienceSection() {
  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        <RecCard
          classCard="card-body cc-experience-header"
          nameCard="Experience One"
          yearsCard="2011-2012"
          titleCard="Master of Information Technology"
          categoryCard="University of Computer Science"
          textCard=" Euismod massa scelerisque suspendisse fermentum habitant vitae
              ullamcorper magna quam iaculis, tristique sapien taciti mollis
              interdum sagittis libero nunc inceptos tellus, hendrerit vel
              eleifend primis lectus quisque cubilia sed mauris. Lacinia
              porta vestibulum diam integer quisque eros pulvinar curae,
              curabitur feugiat arcu vivamus parturient aliquet laoreet at,
              eu etiam pretium molestie ultricies sollicitudin dui."
        ></RecCard>
        <RecCard
          classCard="card-body cc-experience-header"
          nameCard="Experience Degree"
          yearsCard="2011-2012"
          titleCard="Master of Information Technology"
          categoryCard="University of Computer Science"
          textCard=" Euismod massa scelerisque suspendisse fermentum habitant vitae
            ullamcorper magna quam iaculis, tristique sapien taciti mollis
            interdum sagittis libero nunc inceptos tellus, hendrerit vel
            eleifend primis lectus quisque cubilia sed mauris. Lacinia
            porta vestibulum diam integer quisque eros pulvinar curae,
            curabitur feugiat arcu vivamus parturient aliquet laoreet at,
            eu etiam pretium molestie ultricies sollicitudin dui."
        ></RecCard>
      </div>
    </div>
  );
}
