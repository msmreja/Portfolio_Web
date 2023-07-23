import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Projects from './components/projects/projects';
import About from './components/about/About'
import Qualification from './components/qualification/Qualification';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Qualification />
    </main>
    </> 
  )
}

export default App
