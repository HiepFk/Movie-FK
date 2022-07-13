import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Info from "../components/Info";
import Credits from "../components/Credits";
import Video from "../components/Video";
import Season from "../components/Season";
function Detail({ type }) {
  return (
    <Wrapper>
      <Header />
      <Info type={type} />
      <Credits type={type} />
      {type === "tv" && <Season type={type} />}
      <Video type={type} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Detail;
