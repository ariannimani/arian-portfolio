import React from "react";
import { AboutMe } from "../../../data/data";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactSection.styles.css";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xgedzzel");
  if (state.succeeded) {
    return <p className="success-msg">Thank you for contacting me!</p>;
  }

  return (
    <div className="section" id="contact">
      <div
        className="cc-contact-information"
        styles="background-image: url('images/staticmap.png')"
      >
        <div className="container">
          <div className="cc-contact">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-0" data-aos="zoom-in">
                  <div className="h4 text-center title">Contact Me</div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="p pb-3">
                            <strong>Feel free to contact me </strong>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-user-circle"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  required="required"
                                />
                                <ValidationError
                                  prefix="text"
                                  field="text"
                                  errors={state.errors}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-file-text"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Subject"
                                  placeholder="Subject"
                                  required="required"
                                />
                                <ValidationError
                                  prefix="text"
                                  field="text"
                                  errors={state.errors}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-envelope"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="email"
                                  name="_replyto"
                                  placeholder="E-mail"
                                  required="required"
                                />
                                <ValidationError
                                  prefix="Email"
                                  field="email"
                                  errors={state.errors}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Your Message"
                                  required="required"
                                ></textarea>
                                <ValidationError
                                  prefix="Message"
                                  field="message"
                                  errors={state.errors}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={state.submitting}
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>Address </strong>
                        </p>
                        <p className="pb-2">{AboutMe.address}</p>

                        <p className="mb-0">
                          <strong>Email</strong>
                        </p>
                        <p>{AboutMe.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
