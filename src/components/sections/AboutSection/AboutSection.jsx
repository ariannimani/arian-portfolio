import React from "react";
import { AboutMe } from "../../../data/data";

function AboutSection() {
  function calcAge(birthDate) {
    var birthday = +new Date(birthDate);
    return ~~((Date.now() - birthday) / 31557600000);
  }
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Hello! I am {AboutMe.firstName} {AboutMe.lastName}.{" "}
                  {AboutMe.profession}.
                </p>
                <p>{AboutMe.about}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Age:</strong>
                  </div>
                  <div className="col-sm-8">{calcAge(AboutMe.birthDate)}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">{AboutMe.email}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">{AboutMe.address}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">{AboutMe.language.join(", ")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
