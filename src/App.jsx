import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import About from './components/about/About'
import Qualification from './components/qualification/Qualification';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Project />
      <Contact />
    </main>
    <Footer />
    </> 
  )
}

export default App
