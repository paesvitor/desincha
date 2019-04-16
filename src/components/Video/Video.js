import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import playButtonImage from "resources/images/play_button.png";
import theme from "resources/theme";

const Wrapper = styled.section`
  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
    `}

  height: 50vh;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};
`;

const Play = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.section``;

const Title = styled.h3`
  margin-bottom: ${theme.spacing.md};
`;

const Text = styled.p`
  line-height: 25px;
`;

function Video({ thumbnail, title, text }) {
  return (
    <Wrapper backgroundImage={thumbnail}>
      <Play>
        <img src={playButtonImage} />
      </Play>

      <Info>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Info>
    </Wrapper>
  );
}

Video.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Video;
