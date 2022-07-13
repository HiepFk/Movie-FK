import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

import img from "../assets/footer-bg.jpg";
function Footer() {
  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper
      className="img"
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="top" onClick={Top}>
        <IoIosArrowUp className="icon" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 3rem;
  position: relative;
  width: 100%;
  height: 20rem;
  .top {
    position: absolute;
    top: -1.5rem;
    left: calc(50% - 1.5rem);
    background-color: #e53637;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
  }
`;
export default Footer;
