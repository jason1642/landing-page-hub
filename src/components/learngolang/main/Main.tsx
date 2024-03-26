'use client'
import * as React from 'react';
import styled from 'styled-components';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
interface IMainProps {
}

const Container = styled.section`
  display:flex;
  background-color: #111827;
  padding: 0 2.5rem;
  flex-direction: column;
  padding-bottom: 6rem;
`;

const Heading = styled.h2`
  /* display:flex; */
  font-size: 4.5rem;
  margin-top: 1rem;
  font-weight: 800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;
const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  /* flex-direction: row; */
  /* flex-basis: 1 1; */
  @media (max-width: 1050px) {
      /* flex-direction: column; */
    }  
`;

const ButtonTray = styled.div`
  display: flex;
  color: #e8e6e3;
  font-weight: 500;
  font-size: 1rem;
  padding-top: 4rem;
`;
const SampleButton = styled.div`
  background-color: #6b7280;
  padding: 1rem;
  border-radius: 5px;
`;
const PurchaseButton = styled.div`
background-color: #2131a5;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 5px;
`;

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <Container>

        <Heading>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400 ">Web </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">Development </span>
                with Go
        </Heading>



        <Wrapper>
          <LeftPanel />
            <RightPanel />
        </Wrapper>


<ButtonTray>
    <SampleButton>{`I'd like a sample`}</SampleButton>
    <PurchaseButton>{`I'm ready to purchase`}</PurchaseButton>
</ButtonTray>
    </Container>
  );
};

export default Main;
