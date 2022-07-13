import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { pageList, searchList } from "../api/list";

function List({ type, choise, title }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [maxPage, setMaxPage] = useState();
  const [text, setText] = useState("");

  const handeSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(1);
    searchList(setData, type, text, page, setLoading, setMaxPage);
    // setText("");
  };

  useEffect(() => {
    setLoading(true);
    pageList(setData, type, choise, page, setLoading, setMaxPage);
  }, [choise, page, type]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <Header className="header" setPage={setPage} />
      <div className="title">
        <div className="left">
          <div className="pillar"></div>
          <div className="desc">{title}</div>
        </div>
        <form className="right" onSubmit={handeSearch}>
          <input
            type="text"
            name="text"
            id="text"
            className="input"
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="text">
            <FiSearch className="icon" />
          </label>
        </form>
      </div>
      <div className="container">
        {data?.results?.map((item, index) => {
          return <Card data={item} key={index} type={type} />;
        })}
      </div>
      <Pagination handePage={setPage} page={page} maxPage={maxPage} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .container {
    padding: 1rem 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 2rem;
  }
  .title {
    padding: 0rem 15rem;
    padding-top: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
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
  .input {
    width: 20rem;
    padding: 0.5rem;
    font-size: 1.25rem;
    border: none;
    background-color: transparent;
    transition: 0.25s linear;
    border-radius: 3px;
  }
  .input:focus {
    background-color: white;
  }
  .icon {
    color: white;
    font-size: 1.75rem;
    margin-left: 1rem;
  }
`;
export default List;
