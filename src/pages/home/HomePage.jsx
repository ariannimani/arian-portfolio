import React from "react";
import { ProfilePage } from "..";
import { About, Skill, Portfolio, Contact } from "components/sections";

export default function HomePage() {
  return (
    <div className="page-content">
      <div>
        <ProfilePage />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
