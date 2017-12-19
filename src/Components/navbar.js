import React    from 'react';
import styled   from 'styled-components';
import _        from '../helpers.js';

export default function(props) {
    return (
        <Container>
            <Logo><img src="logo.png"/></Logo>
            <Nav>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Team</h3>
                <h3>Contact Us</h3>
            </Nav>
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
    min-width: var(--min-screen-width);
`;

const Logo = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: left;

    >img {
        height: 100%;
        margin-left: 20%;
    }
`;

const Nav = styled.div`

    grid-column-start: 3;
    grid-column-end: 4;

    background: var(--accent);
    border-radius: 3px;

    >h3 {
        display: none;
    }

    ${_.media.minTablet`
        display: flex;
    
        border-radius: 3px 0 0 3px;
    
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    
        >h3 {
            display: inline-block;
            color: var(--dark);
            margin: 0;
            padding: 0;
            align-self: center;
            font-size: 1.1rem;
            font-weight: 500;
        }
    `}
`;

const Drawer = styled.div`
    display: none;
`;