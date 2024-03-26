'use client'
import InformationSection from '@/components/learngolang/InformationSection/InformationSection';
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
        <InformationSection />

    </Container>
  );
};

export default Page;
