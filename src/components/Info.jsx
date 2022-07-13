import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BsClock, BsTag } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

import Loading from "./Loading";
import { getDetails } from "../api/detail";
function Info({ type }) {
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
  return (
    <Wrapper
      style={{
        background: `url(${link}${data?.backdrop_path}) no-repeat center center /cover`,
      }}
    >
      <div className="container" vote={data?.vote_average?.toFixed(1)}>
        <div className="info">
          <img src={`${link}${data?.poster_path}`} alt="" className="img" />
          <div className="right">
            <div className="name">{data?.name || data?.title}</div>
            <div className="desc_list">
              <div className="desc_item">
                <BsTag className="icon" />
                {data?.genres?.map((item, index) => {
                  return <span key={index}>{item?.name},</span>;
                })}
              </div>
              <div className="desc_item">
                <BsClock className="icon" />
                <span>{data?.release_date || data?.last_air_date}</span>
              </div>
              {(data?.budget || data?.budget > 0) && (
                <div className="desc_item">
                  <MdAttachMoney className="icon" />
                  <span>
                    Budget :{" "}
                    {data?.budget
                      ?.toString()
                      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              )}
            </div>
            <div className="about">{data?.overview}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.6);
    :before {
      content: attr(vote);
      position: absolute;
      top: calc(90vh / 2 - 15rem - 2.5rem);
      left: calc(15rem - 5rem / 2);
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      font-size: 2rem;
      font-weight: bold;
      background-color: #f1b722;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
  }
  .info {
    padding: 0rem 15rem;
    padding-top: calc(90vh / 2 - 15rem);
    display: flex;
    align-items: center;
    z-index: 99;
  }
  .img {
    height: 30rem;
    border-radius: 0.5rem;
    margin-right: 5rem;
  }
  .name {
    font-size: 3.5rem;
    font-weight: bold;
  }
  .desc_list {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .desc_item {
    margin-bottom: 0.5rem;
    .icon {
      margin-right: 1rem;
      color: yellow;
      font-weight: bold;
    }
    span {
      margin-right: 0.75rem;
      opacity: 0.9;
    }
  }
  .about {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1rem;
  }
`;

export default Info;
