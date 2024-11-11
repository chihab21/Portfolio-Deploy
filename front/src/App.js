import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Qualification from "./Components/Qualification/Qualification";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollTop/ScrollToTop";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Detect scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowScroll(true); // Show the button
    } else {
      setShowScroll(false); // Hide the button
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <hr className="styled-line" />
        <br />
        <About />
        <br />
        <hr className="styled-line" />
        <br />
        <Qualification />
        <br />
        <hr className="styled-line" />
        <br />
        <Skill />
        <br />
        <br />
        <hr className="styled-line" />
        <br />
        <br />
        <Project />
        <hr className="styled-line" />
        <br />
        <br />
        <br />
        <Contact />
        <hr className="styled-line" />
        <br />
        <br />
        <br />
        <Footer />
      </main>

      {/* Scroll to top button */}
      <ScrollToTop showScroll={showScroll} />
    </div>
  );
};

export default App;
