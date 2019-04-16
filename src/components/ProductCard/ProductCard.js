import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "resources/theme";

const Wrapper = styled.section`
  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
    `}
  border-radius: 10px;
  height: 50vh;
  display: flex;
  flex-direction: column-reverse;
  margin-left: -${theme.spacing.md};
  width: 90%;
  /* box-shadow: ${theme.shadow.md}; */
`;

const Info = styled.section`
  background-color: rgba(75, 87, 21, 0.51);
  text-align: center;
  color: #fff;
  padding: ${theme.spacing.lg};

  a {
    color: #fff;
    text-decoration: none;
  }
`;
const Title = styled.h4`
  margin-bottom: ${theme.spacing.md};
`;

function ProductCard({ thumbnail, title }) {
  return (
    <Wrapper backgroundImage={thumbnail}>
      <Info>
        <Title>{title}</Title>

        <a href="#">Ver mais</a>
      </Info>
    </Wrapper>
  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string
};

export default ProductCard;
