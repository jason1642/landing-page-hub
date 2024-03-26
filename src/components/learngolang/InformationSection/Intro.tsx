'use client'
import * as React from 'react';
import styled from 'styled-components';
interface IIntroProps {
}

const Container = styled.div`
  display:flex;
  background-color: white;
  flex-direction: column;

`;

const Paragraph = styled.p`
  color: grey;
  font-size: 1.25rem;
  line-height: 1.75rem;
  /* font-weight: 800; */
  margin-top: 1.25rem;
`;

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  return (
    <Container>
        <Paragraph>{"I can't tell you the number of times I heard this when learning to build my first web app in Go. After a while, it started to haunt me. It isn't that this advice is incorrect; it just isn't that helpful by itself."}</Paragraph>
        <Paragraph>{`It felt like someone was telling me, "You can build a house, all you need is a hardware store!" And I kept hearing it over and over again.`}</Paragraph>
        <Paragraph>{`While this advice is mostly true - you absolutely can build a web app in Go using nothing but the standard library - it wasn't helpful. It didn't get me any closer to building a real application. I was still left with questions like:`}</Paragraph>
    </Container>
  );
};

export default Intro;