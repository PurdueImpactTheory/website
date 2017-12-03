import React    from 'react';
import styled   from 'styled-components';

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
    grid-template-columns: auto 200px 500px auto;
    grid-template-rows: 200px;
    align-self: center;
    margin: 100px auto 25px;
`;

const Logo = styled.div`
    background: #333;
    grid-column-start: 2;
    grid-column-end: 3;
`;

const Mission = styled.div`
    background: #777;
    grid-column-start: 3;
    grid-column-end: 4;
`;

const Video = styled.div`
    width: 700px;
    height: 400px;
    background: var(--light);
    align-self: center;
    margin: 25px auto 100px;
`;
