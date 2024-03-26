import * as React from 'react';
import styled from 'styled-components';
interface IHeadingProps {
}

const Container = styled.div`
  display:flex;
  background-color: white;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #1f2937;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.025em;
`;
const SubText = styled.p`
  color:#0a91b2;
  text-align: center;
`;

const Heading: React.FunctionComponent<IHeadingProps> = (props) => {
  return (
    <Container>
        <Title>{`"All you need is the standard library"`}</Title>
        <SubText>{"- EVERYONE ON R/GOLANG"}</SubText>
    </Container>
  );
};

export default Heading;
