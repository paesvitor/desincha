import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "resources/theme";

const Wrapper = styled.section`
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  overflow: hidden;
`;

const Title = styled.h2`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
`;

function Carousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Wrapper>
      <Title>{props.title}</Title>

      <Slider {...settings}>{props.children}</Slider>
    </Wrapper>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
