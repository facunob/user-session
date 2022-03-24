import React from 'react';
import styled from "styled-components";
import {StylesProvider} from "@material-ui/core";
import {Button as MaterialButton} from "@material-ui/core";

const Button = ({ text }) => {


    return (
        <StylesProvider injectFirst>
            <StyledButton variant="outlined" fullWidth >
                {text}
            </StyledButton>
        </StylesProvider>
    );
};

export default Button;

const StyledButton = styled(MaterialButton)`
     border-radius: 24px;
     color: var(--white) !important; 
     background-color: var(--mainColor) !important;
     border: none !important;
     font-weight: 800 !important;
     text-transform: inherit !important;
     padding: 0 30px !important;
     height: 46px !important;
     
     &:hover {
        background-color: var(--mainHoverColor) !important;
     } 
       
`;