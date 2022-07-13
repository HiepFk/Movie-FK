import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import { getVideo } from "../api/detail";
function Video({ type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    getVideo(setData, type, id, setLoading);
  }, [id, type]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Wrapper key={index}>
            <div className="title">
              <div className="pillar"></div>
              <div className="desc">{item?.name}</div>
            </div>

            <iframe
              src={`https://www.youtube.com/embed/${item?.key}`}
              width="100%"
              height="500"
              title="video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </Wrapper>
        );
      })}
    </>
  );
}
const Wrapper = styled.div`
  padding: 0rem 15rem;
  padding-bottom: 2rem;
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
`;

export default Video;
