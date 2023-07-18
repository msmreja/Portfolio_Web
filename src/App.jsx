import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/projects';

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
    </main>
    </> 
  )
}

export default App
