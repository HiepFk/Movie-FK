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
    if (!text) {
      pageList(setData, type, choise, page, setLoading, setMaxPage);
    }
  }, [choise, page, text, type]);

  useEffect(() => {
    if (text) {
      searchList(setData, type, text, page, setLoading, setMaxPage);
    }
  }, [page, text, type]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <Header className="header" setPage={setPage} />
      <div className="list">
        <div className="form">
          <label htmlFor="text">
            <FiSearch className="icon" />
          </label>
          <form className="right" onSubmit={handeSearch}>
            <input
              type="text"
              name="text"
              id="text"
              className="input"
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        <div className="container">
          {data?.results?.map((item, index) => {
            return <Card data={item} key={index} type={type} />;
          })}
        </div>
      </div>
      <Pagination handePage={setPage} page={page} maxPage={maxPage} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .list {
    padding: 1rem 15rem;
  }
  .container {
    --auto-grid-min-size: 15rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
  }
  .form {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .input {
    width: 18.5rem;
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
    margin-right: 1rem;
  }

  @media (max-width: 992px) {
    .list {
      padding: 1rem 5rem;
    }
  }
  @media (max-width: 768px) {
    .list {
      padding: 1rem;
    }
  }
  @media (max-width: 600px) {
    .container {
      --auto-grid-min-size: 10rem;
    }
  }
`;
export default List;
