import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle-qualification">
        My Professional Journey
      </span>
      <div className="qualification__container qualification__section  container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualifaction__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  KNKLabs Private Limited
                </h3>
                <span className="qualification__subtitle">
                  Hyderabad, Telangana
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Aug 2023-Feb 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
