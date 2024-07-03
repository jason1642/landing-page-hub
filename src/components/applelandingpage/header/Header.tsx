'use client'
import * as React from 'react';
import styled from 'styled-components';
interface IHeaderProps {
}

const Container = styled.div`
  display: flex;

`;

const linkArray = ['Store','Mac','iPad','iPhone','Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support']

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Container>

        {linkArray.map(ele=><div key={ele}>
            {ele}
        </div>)}

    </Container>
  );
};

export default Header;
