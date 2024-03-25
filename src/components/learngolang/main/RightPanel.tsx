"use client"
import * as React from 'react';
import styled from 'styled-components';

interface IRightPanelProps {
}

const Container = styled.div`
  display:flex;
  width: 50%;
`;

const Video = styled.video`
  /* display:flex; */
`;

const RightPanel: React.FunctionComponent<IRightPanelProps> = (props) => {
  return (
    <Container>


<Video
 src="https://player.vimeo.com/video/646568645?h=7da6b21b4c"
  width="750"
   height="500" 
    typeof="video/mp4"
   controls
   />
    </Container>
  );
};

export default RightPanel;
