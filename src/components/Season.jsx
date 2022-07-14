import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsClock } from "react-icons/bs";

import Loading from "./Loading";
import { getDetails } from "../api/detail";

function Season({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const link = process.env.REACT_APP_API_IMG;

  const { id } = useParams();
  useEffect(() => {
    getDetails(setData, type, id, setLoading);
  }, [id, type]);

  if (loading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">All Season</div>
      </div>
      <div className="season_list">
        {data?.seasons?.map((item, index) => {
          return (
            <div className="season_item" key={index}>
              <img src={`${link}${item?.poster_path}`} alt="" className="img" />
              <div className="season_info">
                <div className="season_name">
                  {item?.name} - <span>{item?.episode_count} episodes</span>
                </div>
                <div className="date">
                  <BsClock className="icon" />
                  <span>{item?.air_date}</span>
                </div>
                <div className="season_about">
                  {item?.overview?.length === 0
                    ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat officiis velit dolorum ullam, ratione blanditiis modi consectetur? Alias facere culpa animi, vel tempora atque nisi consequatur maxime ea sunt?"
                    : item?.overview}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0rem 15rem;
  padding-bottom: 1rem;
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
  .season_item {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }
  .img {
    width: 12rem;
    border-radius: 5px;
    margin-right: 5rem;
  }
  .season_name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    span {
      font-weight: normal;
      opacity: 0.8;
    }
  }
  .date {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .icon {
      color: yellow;
      font-weight: bold;
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    span {
      opacity: 0.8;
    }
  }

  .season_about {
    opacity: 0.8;
  }

  @media (max-width: 992px) {
    padding: 1rem;
    .img {
      margin-right: 2rem;
    }
  }
  @media (max-width: 600px) {
    .season_item {
      flex-direction: column;
      margin: 0 auto;
      text-align: center;
    }
    .img {
      width: 18rem;
      margin-bottom: 1rem;
      margin-right: 0rem !important;
    }
    .date {
      display: inline-block;
      width: 20rem;
      margin: 0 auto;
    }
    .season_about {
      margin-bottom: 2rem;
      margin-top: 1rem;
    }
  }
`;
export default Season;
