'use client'
import * as React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Intro from './Intro';
interface IInformationSectionProps {
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  /* max-width: 100%; */
  justify-content: center;
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  font-size: 1.25rem;
  /* position: relative; */
  @media (min-width: 1024px) {
    max-width: 65ch;
    }  
`;
const Section = styled.section`
  /* width: 100%; */
  /* height: 100%; */
  background-color: white;
`;
const InformationSection: React.FunctionComponent<IInformationSectionProps> = (props) => {
  return (
    <Section>
           <Container>
        <Heading />
        <Intro />
    </Container>
    </Section>
 
  );
};

export default InformationSection;
