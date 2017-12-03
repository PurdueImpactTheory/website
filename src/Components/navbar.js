import React    from 'react';
import styled   from 'styled-components';

export default function(props) {
    return (
        <Container>
            <Name>The Pit</Name>
            <Nav/>
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
    grid-template-columns:  200px auto ${sizeOfEachTab * numberOfTabs}px ;
    grid-template-rows: 40px;
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
`;