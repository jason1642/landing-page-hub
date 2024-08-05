'use client'
import * as React from 'react';
import styled from 'styled-components';
import { Rocket, Search, ShoppingBag } from '@mui/icons-material';
interface IHeaderProps {
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-content: space-between;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  background-color: lightgrey;
`;
const Wrapper = styled.div`
  /* display:flex; */
  width: 100%;
  background-color: lightgrey;
`;
const linkArray = ['Store','Mac','iPad','iPhone','Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support']

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Wrapper>

 
    <Container>
      <Rocket />
        {linkArray.map(ele=><div key={ele}>
            {ele}
        </div>)}

      <Search/>
      <ShoppingBag/>
    </Container>
       </Wrapper>
  );
};

export default Header;
