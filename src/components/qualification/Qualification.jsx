import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification__section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle-qualification">My Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualifaction__icon"></i>{" "}
            Education
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  Samskruti College of Engg. & Tech.
                </h3>
                <span className="qualification__subtitle">
                  Ghatkesar, Hyderabad
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">
                  Samsi Agril High School
                </h3>
                <span className="qualification__subtitle">
                  Samsi, Malda, West Bengal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Chorolmoni High School</h3>
                <span className="qualification__subtitle">
                  Chorolmoni, Malda, West Bengal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017
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

export default Qualification;
