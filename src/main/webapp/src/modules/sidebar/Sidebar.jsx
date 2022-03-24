import React from 'react';
import styled from 'styled-components';
import Logo from "../../components/Logo";
import IconOption from "./IconOption";
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {PAGES_CONFIG} from "../../config/constans";
import {useLocation} from "react-router-dom";



const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <Container>
            <SideBarSection>
                <Logo />
                <IconOption text={PAGES_CONFIG.HOME.name} Icon={HomeIcon}  active={pathname === PAGES_CONFIG.HOME.pathname} />
                <IconOption text={PAGES_CONFIG.NOTIFICATIONS.name} Icon={NotificationsNoneIcon} active={pathname === PAGES_CONFIG.NOTIFICATIONS.pathname} />
                <IconOption text={PAGES_CONFIG.GOALS.name} Icon={EmojiEventsIcon} active={pathname === PAGES_CONFIG.GOALS.pathname} />
            </SideBarSection>

        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
    flex: 0.2;
    min-width: 16vw;
    border-right: 1px solid var(--black);
    padding: 20px;
`;

const SideBarSection = styled.div`
    border-bottom: 1px solid var(--black);
`;