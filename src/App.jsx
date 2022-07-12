import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="movies" element={<List />} />
        <Route exact path="movies/:id" element={<Detail />} />
        <Route exact path="tvs" element={<List />} />
        <Route exact path="tvs/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
