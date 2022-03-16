import React from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import AboutSection from "../../sections/AboutSection/AboutSection";
import SkillSection from "../../sections/SkillSection/SkillSection";
import PortfolioSection from "../../sections/PortfolioSection/PortfolioSection";
import EducationSection from "../../sections/EducationSection/EducationSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import ReferenceSection from "../../sections/ReferenceSection/ReferenceSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <div className="page-content">
      <div>
        <ProfilePage></ProfilePage>
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <PortfolioSection></PortfolioSection>
        <ExperienceSection></ExperienceSection>
        <EducationSection></EducationSection>
        <ReferenceSection></ReferenceSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}
