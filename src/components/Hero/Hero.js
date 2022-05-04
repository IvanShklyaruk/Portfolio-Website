import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Ivan Shklyaruk's <br /> 
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        My goal is too build up knowledge of technologies such as React and JavaScript and at the same time help your company with the skills I have developed.
      </SectionText>
      <Button onClick={() => location.href = 'mailto:ishklyar@uwaterloo.ca?subject=Portfolio'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;