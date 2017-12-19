import React    from 'react';
import styled   from 'styled-components';
import _        from '../helpers.js';

export default function(props) {
    return (
        <Container>
            <MastHead>
                <Logo/>
                <Mission>
                    <p>
                        Quisque id mauris volutpat, porta elit vitae porttitor commodo. Suspendisse et suscipit metus, id eleifend orci. 
                    </p>
                    <p>
                        Fusce ac porttitor turpis, gravida cursus mauris. Ut ac nibh ut metus pellentesque maximus nec ac felis. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </Mission>
            </MastHead> 
            <Video/>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(black_lozenge/black_lozenge.png);
    background-repeat: repeat;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    min-width: var(--min-screen-width);
`;

const MastHead = styled.div`
    display: grid;
    grid-template-columns: auto 90vw auto;
    grid-template-rows: 200px auto;
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
    background-image: url(logo.png);
    background-size: cover;
    
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
    color: var(--light);
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

    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding: 10px;

    >p {
        margin: 10px;
        font-size: 16px;
        line-height: 22px;
        text-align: left;
    }
`;

const Video = styled.div`    
    background: var(--light);
    
    align-self: center;
    
    width: 90vw;
    height: 50vw;
    max-width: 90vw;
    max-height: 80vh;
    margin: 25px auto 50px;

    ${_.media.minTablet`
        margin: 25px auto 100px;
    `}
`;
