import * as React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
interface IInformationSectionProps {
}

const Container = styled.div`
  display: flex;
`;

const InformationSection: React.FunctionComponent<IInformationSectionProps> = (props) => {
  return (
    <Container>
        <Heading />
    </Container>
  );
};

export default InformationSection;
