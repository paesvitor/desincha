import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "resources/theme";

const Base = styled.button`
  ${({}) => css`
    font-weight: bold;
    cursor: pointer;
    font-size: ${theme.font.size.md};
    background: transparent;
    border: none;
  `}
`;

const FlatButton = styled(Base)`
  ${({ color }) => css`
    background: ${theme.colors[color]};
    padding: ${theme.spacing.md};
    color: #fff;
    border-radius: 3px;
    width: 100%;
  `}
`;

const TextButton = styled(Base)`
  ${({ color }) => css`
    color: ${theme.colors[color]};
  `}
`;

function Button(props) {
  switch (props.variant) {
    case "flat":
      return <FlatButton {...props}> {props.children} </FlatButton>;
    case "text":
      return <TextButton {...props}> {props.children} </TextButton>;
    default:
      return <Base {...props}> {props.children} </Base>;
  }
}

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  color: "primary"
};

export default Button;
