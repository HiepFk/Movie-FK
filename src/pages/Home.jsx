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
      <ListCard type="movie" getTrending={getTrending} />
      <ListCard type="tv" getTrending={getTrending} />
      <ListCard type="movie" getTopRated={getTopRated} />
      <ListCard type="tv" getTopRated={getTopRated} />
    </>
  );
}

export default Home;
