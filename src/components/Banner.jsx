import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import { banner } from "../api/home";
import logo from "../assets/logo3.png";
function Banner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    banner(setData);
  }, []);
  return (
    <Wrapper>
      <img src={logo} alt="" className="img_logo" />
      <div className="wrapper">
        {data.map((item, index) => {
          return <BannerItem key={index} item={item} index={index} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .img_logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 22rem;
    z-index: 99;
  }
  .wrapper {
    display: grid;
    height: 40rem;
    grid-template-areas:
      "mot mot mot mot hai hai "
      "mot mot mot mot ba bon";
    .banner_item:first-child {
      grid-area: mot;
    }

    .banner_item:nth-child(2) {
      grid-area: hai;
    }
    .banner_item:nth-child(3) {
      grid-area: ba;
    }
    .banner_item:last-child {
      grid-area: bon;
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      height: 90rem;
      grid-template-areas:
        "mot"
        "hai"
        "ba"
        "bon
        ";
    }
    .img_logo {
      top: 1rem;
      left: calc(50% - 11rem);
    }
    .wrapper {
      padding-top: 6.5rem;
    }
  }
`;

export default Banner;
