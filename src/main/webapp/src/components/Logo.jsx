import React from 'react';
import styled from 'styled-components';
import ApiIcon from '@mui/icons-material/Api';

const Logo = () => {
    return (
        <>
            <Icon />Fnt
        </>
    );
};

export default Logo;

const Icon = styled(ApiIcon)`
    margin: 10px 0;
    width: 50px !important;
    transform: scale(1.6);
    fill: var(--mainColor) !important;
`;