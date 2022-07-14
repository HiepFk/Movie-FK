import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.jpg";
import { menu } from "../utils/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
function Header({ setPage }) {
  const [index, setIndex] = useState(1);
  const [active, setActive] = useState(false);

  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <div className={active ? "menu_list menu_active" : "menu_list"}>
        {menu.map((item) => {
          return (
            <Link
              to={item.url}
              className={item.id === index ? "menu_item active" : "menu_item"}
              key={item.id}
              onClick={() => {
                setIndex(item.id);
                setPage(1);
              }}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="icon" onClick={() => setActive(!active)}>
        {active ? (
          <AiOutlineClose className="toggle" />
        ) : (
          <FaBars className="toggle" />
        )}
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
  .icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    .icon {
      display: block;
    }
    .menu_list {
      position: fixed;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-100%);
      transition: transform 0.25s ease-in;
      z-index: 99000;
      background-color: #081b27;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    .menu_item {
      margin-top: 3rem;
    }
    .menu_active {
      transform: translateX(0%);
    }
  }
  @media (max-width: 1170px) and (min-width: 768px) {
    padding: 1rem 5rem;
  }
`;

export default Header;
