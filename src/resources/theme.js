import { css } from "styled-components";

export const colors = {
  primaryDarker: "#559D4A",
  primary: "#74BB62",
  primaryLighter: "#C8D97B",
  secondaryDarker: "#014B9B",
  secondary: "#0063BE",
  secondaryLighter: "#318BD9",
  tertiary: "#FFBD29",
  white: "#fff",
  black: "#000",
  text: "#8A8A8A",
  background: "#F7FAFC",
  extra: "#CBCAE9",
  red: "#FF485E"
};

export const defaults = {
  font: {
    size: 1
  },

  boxShadow: {}
};

export const shadow = {
  md: "0px 0px 35px rgba(0, 0, 0, 0.15)",
  lg: "0px 4px 44px rgba(0, 0, 0, 0.25)"
};

export const font = {
  size: {
    xs: `${defaults.font.size * 0.75}rem`,
    sm: `${defaults.font.size * 0.85}rem`,
    md: `${defaults.font.size * 1}rem`,
    lg: `${defaults.font.size * 1.5}rem`,
    xl: `${defaults.font.size * 2}rem`
  }
};

export const spacing = {
  xs: ".25rem",
  sm: ".5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "3rem",
  xxl: "5rem"
};

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default {
  colors,
  defaults,
  font,
  spacing,
  shadow,
  media
};
