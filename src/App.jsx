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
