import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
          <Details>You need to be on chrome to run this application</Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #202020;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 0%.4rem;
  background-color: #bec2cb;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;
const Details = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #bec2cb;
`;
