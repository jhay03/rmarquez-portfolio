import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Fragment style={{ maxHeight: "720vh" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
