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
        title={"POPULAR TV"}
        link="/tvs"
      />
      <ListCard
        type="movie"
        getData={getTopRated}
        title={"TOP MOVIES"}
        link="/topmovies"
      />
      <ListCard
        type="tv"
        getData={getTopRated}
        title={"TOP TV "}
        link="/toptvs"
      />
    </>
  );
}

export default Home;
