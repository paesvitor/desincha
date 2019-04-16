import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "resources/theme";

const Wrapper = styled.section`
  margin-left: -${theme.spacing.md};
  width: 90%;
  border-radius: 12px;
  background-color: #fff;
`;

const Image = styled.img`
  height: 70vh;
  width: 100%;
`;

const Info = styled.section``;
const Text = styled.p`
  padding: ${theme.spacing.lg};
  color: #625e5e;
  font-size: ${theme.font.size.sm};
  text-align: center;
`;
const Button = styled.button`
  background: ${theme.colors.primary};
  padding: ${theme.spacing.md};
  border: none;
  color: #fff;
  border-radius: 3px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  font-size: ${theme.font.size.md};
  font-weight: bold;
`;

function BlogCard({ thumbnail, text }) {
  return (
    <Wrapper>
      <Image src={thumbnail} />

      <Info>
        <Text>{text}</Text>
        <Button>Ingressos</Button>
      </Info>
    </Wrapper>
  );
}

BlogCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default BlogCard;
