'use client'
import * as React from 'react';
import styled from 'styled-components';
interface ISubHeaderProps {
}

const Container = styled.div`
  display:flex;
  background-color: white;
  color: black;
  padding: 1rem;
  justify-content: space-around;
  align-content: space-between;
`;

const Title = styled.h1`
  
`;

const LinkWrapper = styled.div`
  display:flex;

`;
const Item = styled.div`
  display: flex;
  padding: .5rem;
`;

const ApplyButton = styled.div`
  
`;

const linkArray = ['Overview', 'Features', 'Family', 'Monthly Installments', 'How-To Videos']


const SubHeader: React.FunctionComponent<ISubHeaderProps> = (props) => {
  return (
    <Container>
        <Title>Apple Card</Title>

        <LinkWrapper>
            {linkArray.map(ele=>
            <Item key={ele}>
                {ele}
            </Item>)}
        </LinkWrapper>

        <ApplyButton>Apply Now</ApplyButton>
    </Container>
  );
};

export default SubHeader;
