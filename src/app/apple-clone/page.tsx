'use client'
import Intro from '@/components/applelandingpage/intro/Intro';
import * as React from 'react';
import styled from 'styled-components';
interface IPageProps {
}

const Container = styled.div`
    background-color: #ffffff;

`;

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container>
       
    <Intro/>
    </Container>
  );
};

export default Page;
