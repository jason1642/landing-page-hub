'use client'
import * as React from 'react';
import styled from 'styled-components';
interface IBannerProps {
}

const Container = styled.div`
  display:flex;
  background-color: white;
  color: black;
`;

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <Container>
        With every purchase, get up to 3% Daily Cash back to spend or save. Apply now {">"}
    </Container>
  );
};

export default Banner;
