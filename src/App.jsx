// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your pages (we'll create them next!)
import Home from './pages/Home';
import Web from './pages/Web';
import Content from './pages/Content';
import AI from './pages/AI';
import Tuhai from './pages/Tuhai';
import Holboo from './pages/Holboo';

function App() {
  const location = useLocation();
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/Tuhai" element={<Tuhai />} />
        <Route path="/Holboo" element={<Holboo />} />
      </Routes>

      {location.pathname === '/' && <Footer />}
    </main>
  );
}

export default App;
