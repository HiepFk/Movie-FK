import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.jpg";
import { menu } from "../utils/link";

function Header() {
  const [index, setIndex] = useState(1);

  const pathname = window.location.pathname;
  useEffect(() => {
    console.log(pathname);
    if (pathname === "/") {
      setIndex(1);
    }
    if (pathname.includes("/movies")) {
      setIndex(2);
    }
    if (pathname.includes("/tvs")) {
      setIndex(3);
    }
    if (pathname === "/topmovies") {
      setIndex(4);
    }
    if (pathname === "/toptvs") {
      setIndex(5);
    }
  }, [pathname]);

  return (
    <Wrapper>
      <Link to={"/"} onClick={() => setIndex(0)}>
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="menu_list">
        {menu.map((item) => {
          return (
            <Link
              to={item.url}
              className={item.id === index ? "menu_item active" : "menu_item"}
              key={item.id}
              onClick={() => setIndex(item.id)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 15rem;
  background-color: #0c2738;
  .img {
    width: 5rem;
    transform: translateX(-0.5rem);
  }
  .menu_item {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 2rem;
    color: white;
    padding-bottom: 0.5rem;
    border-bottom: 2.5px solid transparent;
    transition: all 0.25s linear;
    :hover {
      border-bottom: 2.5px solid red;
    }
  }
  .active {
    border-bottom: 2.5px solid red;
  }
`;

export default Header;
