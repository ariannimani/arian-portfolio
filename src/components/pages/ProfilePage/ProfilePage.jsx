import React from "react";
import CircleBtn from "../../buttons/CircleBtn/CircleBtn";
import MainBtn from "../../buttons/MainBtn/MainBtn";
import { AboutMe, Social } from "../../../data/data";
import resume from "../../../data/ARIAN NIMANI CV.pdf";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            style={{
              backgroundImage:
                "url(" + require("../../../images/bg-1.jpg") + ")",
            }}
          ></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="/">
                  <img
                    src={require("../../../images/arianImage.jpg")}
                    alt="ArianIMG"
                  />
                </a>
              </div>
              <div className="h2 title">
                {AboutMe.firstName} {AboutMe.lastName}
              </div>
              <p className="category text-white">{AboutMe.profession}</p>
              <MainBtn
                classNameBtn="btn btn-primary smooth-scroll mr-2"
                textBtn="Hire Me"
                enterLink="#contact"
              ></MainBtn>
              <MainBtn
                classNameBtn="btn btn-primary"
                textBtn="Download CV"
                enterLink={resume}
              ></MainBtn>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                {Social.map((value) => (
                  <CircleBtn
                    key={value.id}
                    enterLink={value.linkUrl}
                    titleBtn={"Follow me on " + value.social}
                    classBtn={"fa fa-" + value.social}
                  ></CircleBtn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
