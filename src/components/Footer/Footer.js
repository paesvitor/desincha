import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import logoImage from "resources/images/logo@2x.png";
import instagramIcon from "resources/images/instagram_icon@2x.png";
import facebookIcon from "resources/images/facebook_icon@2x.png";
import youtubeIcon from "resources/images/youtube_icon@2x.png";
import ebitIcon from "resources/images/ebit_icon@2x.png";
import theme from "resources/theme";

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  color: #fff;
  padding: ${theme.spacing.md};
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    ${theme.colors.primaryLighter},
    ${theme.colors.primaryDarker}
  );
  transform: skewY(-16deg);
  transform-origin: top right;
  z-index: -1;
`;

const Content = styled.section`
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
  margin-bottom: ${theme.spacing.lg};

  .logo {
    img {
      width: 160px;
    }
  }

  ul {
    list-style-type: none;
    li {
      margin-bottom: ${theme.spacing.lg};
    }
  }
`;

const Badges = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};

  ul {
    img {
      width: 40px;
    }
  }

  .ebit {
    text-align: center;
    img {
      width: 80px;
    }
    p {
      font-weight: bold;
      margin-bottom: ${theme.spacing.md};
    }
  }
`;

const Copyright = styled.p``;

function Footer() {
  return (
    <Wrapper>
      <Background />

      <Content>
        <div className="logo">
          <img src={logoImage} />
        </div>

        <ul>
          <li>Quem somos</li>
          <li>Onde encontrar</li>
          <li>Imprenssa</li>
          <li>Fale conosco</li>
          <li>Termos de uso</li>
          <li>Perguntas frequentes</li>
        </ul>
      </Content>

      <Badges>
        <ul>
          <img src={instagramIcon} />
          <img src={facebookIcon} />
          <img src={youtubeIcon} />
        </ul>

        <div className="ebit">
          <p>Compre com segurança:</p>
          <img src={ebitIcon} />
        </div>
      </Badges>

      <Copyright>
        Desinchá® LTDA – 27.558.408/000130 – contato@desincha.com.br © 2019
        Desinchá®. Todos os direitos reservados.
      </Copyright>
    </Wrapper>
  );
}

export default Footer;
