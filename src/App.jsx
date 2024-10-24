import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Booking from "./pages/Booking";
import "./App.css"; // If needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
