"use client"
import * as React from 'react';
import styled from 'styled-components';
interface ILeftPanelProps {
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  line-height: 2.5rem;
  font-size: 1.5rem;
 
`;

const LeftPanel: React.FunctionComponent<ILeftPanelProps> = (props) => {
  return (
    <Container>

        <p>Learn to build real, <span className='text-yellow-400'>production-grade</span> web applications from scratch.</p>

        <p>👉 No trivial TODO apps that barely touch the complexity of a real app.</p>
        <p>👉 No frameworks that hide all the details</p>

        <p>in this course we build and deploy a photo sharing application complete with users, authentication image uploads, a database, and more. We even deploy to a production server and set up automatic HTTPS.</p>
    </Container>
  );
};

export default LeftPanel;
