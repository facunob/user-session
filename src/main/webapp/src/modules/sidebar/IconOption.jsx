import React from 'react';
import styled from 'styled-components';


const IconOption = ({ text, Icon, active }) => {

    return (
        <SidebarIcon active={active}>
            <Icon style={{ fontSize: 30 }} />
            <h2>
                {text}
            </h2>
        </SidebarIcon>
    );
};

export default IconOption;

const SidebarIcon =  styled.div`
    display: flex;
    align-items: center;
    padding: 14px 10px;
    margin-bottom: 5px;
    border-radius: 8px;
    color: ${props => props.active && 'var(--mainColor)'};
   
    >h2 {
        font-size: 22px;
        margin: 0 15px 0 10px;
        font-weight: 700;
    }    
    
    &:hover {
        background-color: var(--secondaryHoverColor);
        color: var(--mainColor);
        transition: color 100ms ease-out;
    }
`;

