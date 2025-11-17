/**
 * Education component
 *
 * Displays your educational background and certifications.
 */

import React from "react";

import image from "../images/education-background.jpg";

const imageAltText = "abstract background with education theme";

/**
 * Education list
 *
 * An array of objects that will be used to display your education
 * and certifications. Update to reflect your educational background.
 */
const educationList = [
  {
    title: "Undergraduate Student in Computer Science",
    institution: "University of Surabaya",
    year: "2023-2027",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, focusing on software development, algorithms, data structures, and emerging technologies.",
  },
  {
    title: "Machine Learning Cohort",
    institution: "Asah by Dicoding",
    year: "2025",
    description:
      "Intensive machine learning program covering supervised and unsupervised learning, deep learning, model deployment, and real-world ML applications.",
  },
  {
    title: "Additional Certification",
    institution: "Certification Provider",
    year: "20XX",
    description:
      "Specialized training in relevant technology or methodology that supports your professional development and technical expertise.",
  },
  {
    title: "Professional Development",
    institution: "Organization Name",
    year: "20XX",
    description:
      "Continuous learning and skill development through workshops, courses, or training programs in your field of interest.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {educationList.map((education) => (
            <div className="box" key={education.title}>
              <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
              <p className="small" style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                {education.institution}
              </p>
              <p className="small" style={{ fontStyle: "italic", marginTop: "0.25rem" }}>
                {education.year}
              </p>
              <p className="small" style={{ marginTop: "1rem" }}>
                {education.description}
              </p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInRight",
            }}
            alt={imageAltText}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
