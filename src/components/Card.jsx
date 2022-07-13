import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import poster from "../assets/poster.jpg";
function Card({ data, type }) {
  const link = process.env.REACT_APP_API_IMG;

  return (
    <Wrapper>
      <Link
        to={type === "movie" ? `/movies/${data?.id}` : `/tvs/${data?.id}`}
        className="link"
      >
        <div className="wrapper">
          <div className="vote">{data?.vote_average?.toFixed(1)}</div>
          <img
            src={data?.poster_path ? `${link}${data?.poster_path}` : poster}
            alt=""
            className="img"
          />
        </div>
        <div className="time">
          <BsClock className="icon" />
          {data?.release_date && (
            <span>Release date: {data?.release_date}</span>
          )}
          {data?.first_air_date && (
            <span>First air date: {data?.first_air_date}</span>
          )}
        </div>
        <div className="name">{data?.title || data?.name}</div>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  .link {
    color: white !important;
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all 0.25s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }
  }
  .vote {
    position: absolute;
    background-color: #f1b722;
    top: 1.25rem;
    left: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    font-weight: bold;
  }
  .time {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
  }
  .icon {
    transform: translateX(-0.25rem);
    color: yellow !important;
    font-weight: bold;
    margin-right: 0.25rem;
  }
  .name {
    margin-top: 0.75rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
export default Card;
