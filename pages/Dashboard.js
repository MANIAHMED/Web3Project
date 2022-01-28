import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";


const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);


const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebToken, setThirdWebToken] = useState([]);
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://a4xdco9h.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22coins%22%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20logo%2C%0A%20%20symbol%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdWebToken(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    return getSanityAndThirdWebTokens();
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletaddress={address} sanityTokens={sanityTokens} thirdWebToken={thirdWebToken} />
        <Main  walletaddress={address} sanityTokens={sanityTokens} thirdWebToken={thirdWebToken}  />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 500vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: #fff;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
