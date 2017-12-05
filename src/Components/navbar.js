import React    from 'react';
import styled   from 'styled-components';
import _        from '../helpers.js';

export default function(props) {
    return (
        <Container>
            <Name>The Pit</Name>
            <Nav>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Team</h3>
                <h3>Contact Us</h3>
            </Nav>
            <Hamburger/>
            <Drawer>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Team</h3>
                <h3>Contact Us</h3>
            </Drawer>
        </Container>
    );
}

const numberOfTabs = 3;
const sizeOfEachTab = 150;

const Container = styled.div`
    position: fixed;
    margin-top: 10px;
    width: 100vw;
    display: grid;
    grid-template-columns:  200px auto 40px 40px;
    grid-template-rows: 40px;

    ${_.media.minTablet`
        grid-template-columns:  200px auto ${sizeOfEachTab * numberOfTabs}px ;
    `}
`;

const Name = styled.h3`
    padding: 0;
    margin: 0;
    
    color: var(--light);

    grid-column-start: 1;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    background: var(--accent);

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    >h3 {
        color: var(--dark);
        margin: 0;
        padding: 0;
        align-self: center;
        font-size: 1.1rem;
        font-weight: 500;
    }

    display: none;
    ${_.media.minTablet`
        display: flex;;
    `}
`;

const Hamburger = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    background: var(--accent);
    ${_.media.minTablet`
        display: none;
    `}
`;

const Drawer = styled.div`
    display: none;
`;