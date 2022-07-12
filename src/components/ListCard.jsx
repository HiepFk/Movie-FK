import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

import Card from "./Card";
function ListCard({ type, getData, title, link }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setData, type);
  }, [getData, type]);

  return (
    <Wrapper>
      <div className="title">
        <div className="left">
          <div className="pillar"></div>
          <div className="desc">{title}</div>
        </div>
        <Link to={`${link}`} className="right">
          <div className="all">View all</div>
          <BsArrowRight className="icon" />
        </Link>
      </div>
      <div className="container">
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1.5rem",
          }}
        >
          {data?.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <Card data={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1rem 15rem;
  padding-bottom: 0rem;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .right:hover {
    .icon {
      transform: translateX(0.35rem);
    }
  }
  .pillar {
    width: 0.25rem;
    height: 3rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 2.5rem;
    color: white;
    font-weight: 600;
  }
  .all {
    color: white;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
    transition: all 0.25s linear;
  }
  .container {
    cursor: pointer;
    width: calc(100% - 0.5rem);
    /* height: 25rem; */
  }
`;
export default ListCard;
