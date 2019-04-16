import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logoImage from "resources/images/logo@2x.png";
import shoppingIcon from "resources/images/shopping_icon@2x.png";
import menuIcon from "resources/images/menu_icon@2x.png";
import theme from "resources/theme";

const Wrapper = styled.nav`
  transition: 0.2s all;
  position: fixed;
  display: flex;
  width: 100%;
  background-color: ${({ isOnTop }) => (isOnTop ? "transparent" : "#6C856C")};
  color: #fff;
  z-index: 5;
`;

const Logo = styled.section`
  flex: 1;

  img {
    width: 120px;
  }
`;

const Actions = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;

  li {
    margin-right: ${theme.spacing.md};
    img {
      width: 25px;
    }
  }
`;

function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const checkIfIsOnTop = window.scrollY < 100;
      console.log(checkIfIsOnTop);
      setIsOnTop(checkIfIsOnTop);
    });
  }, []);

  return (
    <Wrapper isOnTop={isOnTop}>
      <Logo>
        <img src={logoImage} />
      </Logo>
      <Actions>
        <li>
          <img src={shoppingIcon} />
        </li>
        <li>
          <img src={menuIcon} />
        </li>
      </Actions>
    </Wrapper>
  );
}

export default Navbar;
