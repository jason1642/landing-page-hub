"use client"
import * as React from 'react';
import styled from 'styled-components';
interface ILeftPanelProps {
}

const Container = styled.div`
  /* display:flex; */
  grid-column: 1 / 3;
  /* flex-direction: column; */
  line-height: 2.5rem;
  font-size: 1.5rem;
  /* width: 50%; */
  color: #e5e7eb;

`;

const LeftPanel: React.FunctionComponent<ILeftPanelProps> = (props) => {
  return (
    <Container>

        <p>Learn to build <span className='text-yellow-400'>real, production-grade</span> web applications from scratch.</p>

        <p className='mt-5'>👉 No trivial TODO apps that barely touch the complexity of a real app.</p>
        <p>👉 No frameworks that hide all the details</p>

        <p className='leading-8 mt-5'>
            in this course we build and deploy a photo sharing application complete 
            with <span className='border-b-amber-300 border-b-[2px] border-dotted '>users</span>
            , <span className='border-b-amber-300 border-b-[2px] border-dotted '>authentication</span>, <span className='border-b-amber-300 border-b-[2px] border-dotted '>image uploads</span>, a <span className='border-b-amber-300 border-b-[2px] border-dotted '>database</span>, and more. We even deploy to a production server and set up automatic HTTPS.
            </p>
    </Container>
  );
};

export default LeftPanel;
