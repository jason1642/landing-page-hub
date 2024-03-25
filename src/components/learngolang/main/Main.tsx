import * as React from 'react';
import styled from 'styled-components';
import LeftPanel from './LeftPanel';
interface IMainProps {
}

const Container = styled.div`
  display:flex;
  background-color: #111827;
  padding: 0 2.5rem;
  flex-direction: column;
`;

const Heading = styled.h2`
  /* display:flex; */
  font-size: 4.5rem;
  font-weight: 800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;
const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  @media (max-width: 1050px) {
      flex-direction: column;
    }  
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
            
        </Wrapper>

    </Container>
  );
};

export default Main;
