import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Accounting from "./components/Route_page/Accounting";
import WelcomePage from "./components/pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="accounting" element={<Accounting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
