/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BMLP Final Project - Clustering & Classification",
    description:
      "End-to-end machine learning notebooks for unsupervised clustering and supervised classification. The project includes data loading, preprocessing, PCA + KMeans clustering, Decision Tree and Random Forest classifiers, evaluation metrics/plots, hyperparameter tuning, and persisted artifacts.",
    url: "https://github.com/nelsooooon/BMLPFinal",
  },
  {
    title: "Sentiment Analysis for Google Classroom Reviews",
    description:
      "A lightweight, notebook-driven pipeline to scrape Google Play Store reviews for Google Classroom, preprocess English text, and run sentiment inference using two models: Logistic Regression (with TF‑IDF features) and a Dense Neural Network (DNN). The repo includes ready-to-run notebooks for scraping and inference, plus pretrained artifacts in the project root.",
    url: "https://github.com/nelsooooon/BFDLFirst",
  },
  {
    title: "BFDLFinal - Multi-Format TensorFlow Image Classifier",
    description:
      "This project provides a trained image classification model exported to three deployment targets: native TensorFlow SavedModel, TensorFlow Lite (for mobile/edge), and TensorFlow.js (for browser inference). It predicts one of the classes defined in tflite/label.txt (e.g. glacier, sea, street).",
    url: "https://github.com/nelsooooon/BFDLFinal",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
