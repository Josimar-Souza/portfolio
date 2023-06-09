import React from 'react';

import {
  AboutMeContainer,
  AboutMeParagraph,
  AboutMeTitle,
  AboutMeSection,
  CustomDivider,
} from './aboutMeStyles';
import {
  presentation,
  start,
  nowadays,
  end,
} from '../../constants/aboutMe';

function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeTitle>Um pouco mais sobre min</AboutMeTitle>
      <AboutMeSection>Apresentação</AboutMeSection>
      <AboutMeParagraph>
        {presentation}
      </AboutMeParagraph>
      <CustomDivider />
      <AboutMeSection>Como comecei</AboutMeSection>
      <AboutMeParagraph>
        {start}
      </AboutMeParagraph>
      <CustomDivider />
      <AboutMeSection>Atualmente</AboutMeSection>
      <AboutMeParagraph>
        {nowadays}
      </AboutMeParagraph>
      <CustomDivider />
      <AboutMeSection>Finalização</AboutMeSection>
      <AboutMeParagraph>
        {end}
      </AboutMeParagraph>
    </AboutMeContainer>
  );
}

export default AboutMe;
