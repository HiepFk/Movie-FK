import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ListCard from "../components/ListCard";
import { getTrending, getTopRated } from "../api/home";
function Home() {
  return (
    <>
      <Banner />
      <Header />
      <ListCard
        type="movie"
        getData={getTrending}
        title={"POPULAR MOVIE"}
        link="/movies"
      />
      <ListCard
        type="tv"
        getData={getTrending}
        title={"POPULAR TV SERIES"}
        link="/tvs"
      />
      <ListCard
        type="movie"
        getData={getTopRated}
        title={"TOP RATED MOVIES"}
        link="/topmovies"
      />
      <ListCard
        type="tv"
        getData={getTopRated}
        title={"TOP RATED TV SERIES"}
        link="/toptvs"
      />
    </>
  );
}

export default Home;
