import React from 'react';
import styled from 'styled-components';

const Header = ({ title }) => {

    return (
        <Container>
            <h2>{title}</h2>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    padding: 10px;
    height: 60px;
    border-bottom: 1px solid var(--black);
`;