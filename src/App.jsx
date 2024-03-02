import React, { useState, useEffect } from "react";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Qualification from "./components/qualification/Qualification";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";

import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container className="">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Qualification />
        <Project />
        <Contact />
      </main>
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
      <Footer />
    </Container>
  );
}

export default App;
