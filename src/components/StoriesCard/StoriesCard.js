import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "resources/theme";

const Wrapper = styled.section`
  color: #fff;
  text-align: center;
`;
const Title = styled.section`
  margin-bottom: ${theme.spacing.md};
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Text = styled.section`
  font-weight: bold;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
`;

function Stories({ title, image, text }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={image} />
      <Text>{text}</Text>
    </Wrapper>
  );
}

export default Stories;
