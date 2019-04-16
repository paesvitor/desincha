import React from "react";
import styled from "styled-components";
import introImage from "resources/images/intro.png";
import playButtonImage from "resources/images/play_button.png";
import noiteStoriesImage from "resources/images/noite_stories@2x.png";
import Stories from "components/StoriesCard";
import theme from "resources/theme";

const Wrapper = styled.section`
  background-image: url(${introImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PlayButton = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroFooter = styled.section`
  display: flex;
  padding: ${theme.spacing.lg};
`;

function Intro() {
  return (
    <Wrapper>
      <PlayButton>
        <img src={playButtonImage} />
      </PlayButton>

      <IntroFooter>
        <Stories
          title="PRÉ-LANÇAMENTO"
          image={noiteStoriesImage}
          text="Desinchá Noite"
        />
      </IntroFooter>
    </Wrapper>
  );
}

export default Intro;
