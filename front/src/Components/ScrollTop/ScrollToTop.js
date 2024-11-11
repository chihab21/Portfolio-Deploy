// ScrollToTop.js
import React from "react";

const ScrollToTop = ({ showScroll }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`scroll-to-top ${showScroll ? "visible" : ""}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
