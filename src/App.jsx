import { useState } from "react";

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
  const [count, setCount] = useState(0);

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
      <Footer />
    </Container>
  );
}

export default App;
