import React from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import AboutSection from "../../sections/AboutSection/AboutSection";
import SkillSection from "../../sections/SkillSection/SkillSection";
import PortfolioSection from "../../sections/PortfolioSection/PortfolioSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <div className="page-content">
      <div>
        <ProfilePage></ProfilePage>
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <PortfolioSection></PortfolioSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}
