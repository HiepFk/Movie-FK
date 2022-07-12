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
        <Route
          exact
          path="movies"
          element={<List type="movie" choise="popular" title="Movie" />}
        />
        <Route exact path="movies/:id" element={<Detail type="movie" />} />
        <Route
          exact
          path="tvs"
          element={<List type="tv" choise="popular" title="Top Tv Series" />}
        />
        <Route exact path="tvs/:id" element={<Detail type="tv" />} />
        <Route
          exact
          path="topmovies"
          element={
            <List type="movie" choise="top_rated" title="Top Rated Movie" />
          }
        />
        <Route
          exact
          path="toptvs"
          element={
            <List type="tv" choise="top_rated" title="Top Rated Tv Series" />
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
