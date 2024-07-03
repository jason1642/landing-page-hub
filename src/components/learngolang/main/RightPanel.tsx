import * as React from 'react';
import styled from 'styled-components';

interface IRightPanelProps {
}

const Container = styled.div`
  /* display:flex; */
  grid-column: span 3 / span 3;
  /* tab-size: 4; */
  height: 100%;

`;

const Video = styled.iframe`
  /* display:flex; */
  width: 100%;
  height: 100%;
`;

const RightPanel: React.FunctionComponent<IRightPanelProps> = (props) => {
  return (
    <Container>


<Video
 src="https://player.vimeo.com/video/646568645?h=7da6b21b4c"
  // width="750"
  //  height="500" 
    typeof="video/mp4"
  //  controls
  //  frameborder='0' .lg\:max-w-prose
   />
    </Container>
  );
};

export default RightPanel;
