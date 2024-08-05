import * as React from 'react';
import styled from 'styled-components';
interface IIntroProps {
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  /* background-color: white; */
  background: radial-gradient(circle at 50% 100%, #D1F0BC 25%, rgba(209,240,188,0) 55%),radial-gradient(at bottom left, #FAF9FD 10%, rgba(250,249,253,0) 30%),radial-gradient(at bottom right, #FBFEFA 25%, rgba(251,254,250,0) 40%);
`;
const Title = styled.div`
  display: flex;
`;

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  return (
    <Container>
        <Title>

        </Title>

    </Container>
  );
};

export default Intro;
