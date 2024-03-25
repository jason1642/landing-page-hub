'use client'
import Main from '@/components/learngolang/main/Main';
import * as React from 'react';
import styled from 'styled-components';
interface IPageProps {
}

const Container = styled.div`
  
`;

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container>
        <Main />

    </Container>
  );
};

export default Page;
