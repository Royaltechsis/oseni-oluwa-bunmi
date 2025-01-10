import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home"; // Your existing Home component
import Resume from "./pages/resume"; // Import the Resume component
import './index.css'; // Ensure this includes Tailwind CSS imports


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-6">

            <li>
              <Link to="/" className="text-gray-200 hover:text-blue-400">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-gray-200 hover:text-blue-400">Portfolio</Link>
            </li>
            
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
