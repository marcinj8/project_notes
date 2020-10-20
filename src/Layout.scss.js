import styled from 'styled-components';

export const LayoutStyled = styled.div`
    position: relative;
    text-align: center;
    min-height: 100vh;
    background: wheat;
`;

export const ContainerStyled = styled.article`
    width: 98%;
    min-width: 300px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1%;
    overflow: auto;

    @media(min-width: 600px) {
        width: 90%;

    }
`;