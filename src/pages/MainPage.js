import React from "react";
import "./MainPage.css"; // Import the CSS file for styling

const MainPage = () => {
  return (
    <div className="mainpage">
      <header className="mainpage-header">
        <h1>Welcome </h1>
        <h2>Christ University Poster Generator</h2>
        <p>Create stunning posters in minutes!</p>
        <img src={"/images/christ-logo.png"} alt="christlogo" />
        <img
          src={"/images/ascii-logo.png"}
          className="ascii-logo"
          alt="asciilogo"
        />
      </header>
      <main className="mainpage-main">
        <section className="features">
          <h2>Features</h2>
          <div className="feature-card">
            <h3>Custom Templates</h3>
            <p>Choose from a variety of templates to get started quickly.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Editing</h3>
            <p>Intuitive tools for adding text, images, and more.</p>
          </div>
          <div className="feature-card">
            <h3>High-Quality Output</h3>
            <p>Export your designs in high resolution for print or web.</p>
          </div>
        </section>
        <section className="cta">
          <h2>Get Started</h2>
          <button
            onClick={() => alert("Starting the poster creation process!")}
          >
            Create Your Poster
          </button>
        </section>
        <section className="templates">
          <h2>Choose a Template</h2>
          <div className="template-buttons">
            <button className="template-button">Template 1</button>
            <button className="template-button">Template 2</button>
            <button className="template-button">Template 3</button>
          </div>
          <div className="template-images">
            <img
              src="/path/to/template1.jpg"
              alt="Template 1"
              className="template-image"
            />
            <img
              src="/path/to/template2.jpg"
              alt="Template 2"
              className="template-image"
            />
            <img
              src="/path/to/template3.jpg"
              alt="Template 3"
              className="template-image"
            />
          </div>
        </section>
        <section className="textbox-section">
          <h3>Event Name</h3>
          <input
            type="text"
            className="textbox"
            placeholder="Enter event name here"
          />
          <h3>Event Details</h3>
          <textarea
            className="textbox"
            placeholder="Enter event details here"
          ></textarea>
        </section>
      </main>
      <footer className="mainpage-footer">
        <p>&copy; 2024 Poster Generator Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
