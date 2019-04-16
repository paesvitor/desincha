import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "resources/theme";

const Wrapper = styled.section`
  ${({ background, from, to }) => css`
    text-align: center;
    padding: ${theme.spacing.xxl} ${theme.spacing.lg};
    ${background === "gradient" &&
      `background-image: linear-gradient(${theme.colors[from]}, ${
        theme.colors[to]
      });

      color: #fff;
    `}
    ${background === "flat" &&
      `background: transparent;
      color: #666262;
    `}
  `}
`;

const Header = styled.section`
  font-weight: bold;
  font-size: ${theme.font.size.lg};
  margin-bottom: ${theme.spacing.xl};
  img {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: ${theme.spacing.lg};
`;

const Title = styled.h2`
  margin-bottom: ${theme.spacing.md};
  ${({ background }) =>
    background === "flat" && `color: ${theme.colors.primary}`}
`;

const Text = styled.p`
  line-height: 21px;
  margin-bottom: ${theme.spacing.xl};
`;

const Actions = styled.section`
  display: flex;
  justify-content: space-around;
`;

function CallToAction({
  header,
  image,
  title,
  text,
  actions,
  background,
  from,
  to
}) {
  return (
    <Wrapper background={background} from={from} to={to}>
      {header && <Header>{header}</Header>}
      {image && <Image src={image} />}
      <Title background={background}>{title}</Title>
      <Text>{text}</Text>
      <Actions>{actions}</Actions>
    </Wrapper>
  );
}

CallToAction.propTypes = {
  header: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.node,
  background: PropTypes.oneOf(["gradient", "flat"]),
  from: PropTypes.string,
  to: PropTypes.string
};

export default CallToAction;
