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

const ApplyButton = styled.div`
  
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

        <ApplyButton>Apply Button</ApplyButton>
    </Container>
  );
};

export default SubHeader;
