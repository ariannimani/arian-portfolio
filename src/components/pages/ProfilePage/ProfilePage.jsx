import React from "react";
import CircleBtn from "../../buttons/CircleBtn/CircleBtn";
import MainBtn from "../../buttons/MainBtn/MainBtn";
import { AboutMe } from "../../../data/data";

function ProfilePage(props) {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            styles="background-image: url('images/cc-bg-1.jpg')"
          ></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="/">
                  <img src="../../../images/arianImage.jpg" alt="ArianIMG" />
                </a>
              </div>
              <div className="h2 title">
                {AboutMe.firstName} {AboutMe.lastName}
              </div>
              <p className="category text-white">{AboutMe.profession}</p>
              <MainBtn
                classNameBtn="btn btn-primary smooth-scroll mr-2"
                textBtn="Hire Me"
                enterLink="./"
              ></MainBtn>
              <MainBtn
                classNameBtn="btn btn-primary"
                textBtn="Download CV"
                enterLink="./"
              ></MainBtn>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <CircleBtn
                  enterLink="./"
                  titleBtn="Follow me on LinkedIn"
                  classBtn="fa fa-linkedin"
                ></CircleBtn>

                <CircleBtn
                  enterLink="./"
                  titleBtn="Follow me on Instagram"
                  classBtn="fa fa-instagram"
                ></CircleBtn>
                <CircleBtn
                  enterLink="./"
                  titleBtn="Follow me on Github"
                  classBtn="fa fa-github"
                ></CircleBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
