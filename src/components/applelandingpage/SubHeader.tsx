'use client'
import * as React from 'react';
import styled from 'styled-components';
interface ISubHeaderProps {
}

const Container = styled.div`
  display:flex;
  background-color: white;
  color: black;
`;

const Title = styled.h1`
  
`;

const LinkWrapper = styled.div`
  display:flex;
`;

const linkArray = ['Overview', 'Features', 'Family', 'Monthly Installments', 'How-To Videos']


const SubHeader: React.FunctionComponent<ISubHeaderProps> = (props) => {
  return (
    <Container>
        <Title>Apple Card</Title>

        <LinkWrapper>
            {linkArray.map(ele=><div key={ele}>
                {ele}
            </div>)}
        </LinkWrapper>
    </Container>
  );
};

export default SubHeader;
