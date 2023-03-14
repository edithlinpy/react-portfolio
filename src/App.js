// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/home" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
