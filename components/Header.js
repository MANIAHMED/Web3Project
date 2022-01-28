import React from "react";
import styled from "styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

const Header = ({walletaddress}) => {
    return (
        <Wrapper>
            <Title> <MdAccountBalanceWallet/> Assets</Title>
            <ButtonsContainer>
               <WalletLink>
               <BsFillCircleFill size={10} color="green" />
                 <WalletLinkTitle> Wallet Connected</WalletLinkTitle>
                 <WalletAddress>{walletaddress.slice(0,7)}...{walletaddress.slice(30,)}</WalletAddress>
               </WalletLink>
                <Button style={{backgroundColor: "#990f02"}}>Buy/Sell</Button>
                <Button style={{backgroundColor: "#028a0f"}}>Send/Recieve</Button>
            </ButtonsContainer>

        </Wrapper>
    )
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
  color: #bec2cb;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.5rem;
  font-size: 1.0rem;
  font-weight: 700;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 0%.4rem;
  background-color: #bec2cb;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;
const WalletLink = styled.div`
font-size: 0.8rem;
border: 1px solid #282b2f;
border-radius: 50rem;
font-size: 1.2rem;
margin-right: 1rem;
padding: 0 1rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

const WalletLinkTitle = styled.div`
font-size: 1.1rem;
margin-bottom: 0.3rem;
color: #27ad27;
font-weight: 600;
`
const WalletAddress = styled.div`
font-size: 0.8rem;
`