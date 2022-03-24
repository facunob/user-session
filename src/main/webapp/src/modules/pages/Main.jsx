import React from 'react';
import styled from 'styled-components';
import Sidebar from "../sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Trending from "../trending/Trending";
import {PAGES_CONFIG} from "../../config/constans";


const Main = () => {

    return (
        <MainContainer>
            <Sidebar />
            <AppContainer>
                <Routes>
                    <Route path={PAGES_CONFIG.HOME.pathname} exact element={<Home />} />
                    <Route path={PAGES_CONFIG.EXPLORE.pathname} element={<Trending />} />
                </Routes>
            </AppContainer>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    max-width: 80vw;
    margin: 0 auto;
`;

const AppContainer = styled.div`
    flex: 0.5;
    border-right: 1px solid var(--black);
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow: none;
    scrollbar-width: none;
`;