import * as React from 'react';
import styled from 'styled-components';
interface IHeadingProps {
}

const Container = styled.div`
  display:flex;
`;

const Title = styled.h3`
  
`;
const SubText = styled.p`
  
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
