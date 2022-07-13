import React from "react";
import { BsClock } from "react-icons/bs";

import { Link } from "react-router-dom";
import styled from "styled-components";

function BannerItem({ item, index }) {
  const link = process.env.REACT_APP_API_IMG;
  return (
    <Wrapper className="container banner_item">
      <Link
        to={
          item?.media_type === "movie"
            ? `/movies/${item?.id}`
            : `/tvs/${item?.id}`
        }
        className="link"
      >
        <div
          className="img"
          style={{
            background: `url(${link}${item?.backdrop_path}) no-repeat center center /cover`,
          }}
        ></div>
        <div className="info">
          <div className={index === 0 ? "vote" : "vote vote_sml"}>
            {item?.vote_average?.toFixed(1)}
          </div>
          <div className={index === 0 ? " name" : "name name_sml"}>
            {item?.name || item?.title}
          </div>
          <div className={index === 0 ? "time" : "time time_sml"}>
            <BsClock className="icon" />
            <span>{item?.release_date}</span>
          </div>
          {index === 0 && (
            <>
              <div className="about">{item?.overview}</div>
            </>
          )}
        </div>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .link {
    color: white;
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.25s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }
  }
  .info {
    z-index: 999;
    position: absolute;
    padding-left: 3rem;
  }
  .vote {
    position: absolute;
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;
    background-color: #f1b722;
    padding: 0.25rem 0.85rem;
    border-radius: 1rem;
    top: 15rem;
  }
  .vote_sml {
    top: 5rem;
  }
  .name {
    position: absolute;
    font-size: 3rem;
    font-weight: 600;
    top: 17rem;
    width: 35rem;
  }
  .name_sml {
    top: 9rem;
    font-size: 1.5rem;
    width: 10rem;
  }
  .time {
    position: absolute;
    top: 21rem;
    display: flex;
    align-items: center;
    width: 10rem;
  }
  .time_sml {
    top: 7.5rem;
  }
  .icon {
    color: yellow;
    margin-right: 1rem;
    font-weight: bold;
  }
  .about {
    position: absolute;
    top: 23rem;
    width: 35rem;
  }
  @media (max-width: 768px) {
    .vote {
      top: 5rem;
    }
    .name {
      top: 9rem;
      font-size: 1.5rem;
      width: 15rem;
    }
    .time {
      top: 7.5rem;
    }
    .about {
      display: none;
    }
  }
`;
export default BannerItem;
