import React, { useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { navItems } from "../static/navItems";

const Sidebar = () => {
  const [activeIcon, setactiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <MdSpaceDashboard size={34} />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => setactiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "green" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(200vh);
  border-right: 1px solid #ccd0d3;
  width: 20%;
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0rem;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  &:hover {
    background-color: #191519;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  color: #bec2cb;
  place-items: center;
`;
const NavTitle = styled.div`
  color: #bec2cb;
`;
