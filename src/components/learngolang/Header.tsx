import styled from 'styled-components';
import * as React from 'react';

const Container = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  margin-top: 1rem;
  background-color: #111827;
`;

const Filler = styled.div`
  display:flex;
  height: 1px;
  flex-grow: 1;
`;
const UpdatesButton = styled.div`
  display:flex;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #374151;
`;
const LoginButton = styled.div`
  display:flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: #374151;
  border-radius: 5px;
  margin-left: 1.3rem;
`;
const Wrapper = styled.div`
  display:flex;
`;
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  
    return (
    <Container>
        <Filler />
        <Wrapper>



        <UpdatesButton>
            Updated Nov, 2023 using Go 1.21
        </UpdatesButton>
        <LoginButton >
            Log in
        </LoginButton>
                </Wrapper>
    </Container>
  );
};

export default Header;
