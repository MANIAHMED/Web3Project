import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Main = ({walletaddress, sanityTokens , thirdWebToken}) => {
  return (
    <Wrapper>
      <Portfolio  walletaddress={walletaddress} sanityTokens={sanityTokens} thirdWebToken={thirdWebToken}  />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`;
