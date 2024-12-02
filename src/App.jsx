import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Work, Info } from "./containers";
import {
  Preloader,
  Navbar,
  Footer,
  Notfound
} from "./components/";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <Preloader />
        </>
      ) : (
        <div className="app-container">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Work />} />
              <Route path="/info" element={<Info />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
