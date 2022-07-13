import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Loading from "./Loading";
import { getCredits } from "../api/detail";

function Credits({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const link = process.env.REACT_APP_API_IMG;

  const { id } = useParams();
  useEffect(() => {
    getCredits(setData, type, id, setLoading);
  }, [id, type]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">CAST</div>
      </div>
      <div className="cast_list">
        <Splide
          options={{
            perPage: 7,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "0.5rem",
          }}
        >
          {data?.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="cast_item" key={index}>
                  <img
                    src={`${link}${item?.profile_path}`}
                    alt=""
                    className="img_cast"
                  />
                  <div className="name">{item?.original_name}</div>
                  <div className="character">{item?.character}</div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem 15rem;
  .title {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }
  .pillar {
    width: 0.25rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.75rem;
    color: white;
    font-weight: 600;
  }
  .cast_list {
    cursor: pointer;
  }
  .cast_item {
    margin-bottom: 1rem;
  }
  .img_cast {
    width: 8rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
  .character {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    opacity: 0.8;
  }
`;

export default Credits;
