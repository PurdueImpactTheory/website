import React    from 'react';
import styled   from 'styled-components';

export default function(props) {
    return (
        <Container>
            <Logo/>
            <Mission/>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 200px 500px auto;
    grid-template-rows: 200px;
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
