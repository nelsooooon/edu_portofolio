/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
      <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
      <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')}>Portfolio</a>
      <a href="#education" onClick={(e) => handleClick(e, 'education')}>Education</a>
      <a href="#footer" onClick={(e) => handleClick(e, 'footer')}>Contact</a>
    </div>
  );
};

export default Header;
