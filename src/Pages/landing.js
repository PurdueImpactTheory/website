import React    from 'react';
import styled   from 'styled-components';
import _        from '../helpers.js';

export default function(props) {
    return (
        <Container>
            <MastHead>
                <Logo/>
                <Mission/>
            </MastHead> 
            <Video/>
        </Container>
    );
}

const Container = styled.div`
    min-height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const MastHead = styled.div`
    display: grid;
    grid-template-columns: auto 90vw auto;
    grid-template-rows: 200px 300px;
    align-items: center;
    justify-content: center;

    align-self: center;
    margin: 100px auto 10px;

    ${_.media.minTablet`
        grid-template-columns: auto 200px 500px auto;
        grid-template-rows: 200px;
        align-self: center;
        margin: 100px auto 25px;
    `}
`;

const Logo = styled.div`
    background: #333;

    width: 200px;
    height: 200px;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: center;

    ${_.media.minTablet`
        grid-column-start: 2;
        grid-column-end: 3;
        justify-self: stretch;
    `}
`;

const Mission = styled.div`
    background: #777;
    
    justify-self: center;
    align-self: center;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    ${_.media.maxPhone`
        height: 100%;
        width: 100%;
        max-width: 500px;
    `}
    ${_.media.minTablet`
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
        justify-self: stretch;
        align-self: stretch;
    `}
`;

const Video = styled.div`    
    background: var(--light);
    
    align-self: center;
    
    width: 90vw;
    height: 50vw;
    margin: 25px auto 50px;

    ${_.media.minTablet`
        width: 700px;
        height: 400px;
        margin: 25px auto 100px;
        align-self: stretch;
    `}
`;
