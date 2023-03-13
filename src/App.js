// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
