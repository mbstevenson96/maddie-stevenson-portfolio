import './App.css';
import { Route, Routes } from 'react-router-dom';

// components
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </>
  );
}

export default App;
