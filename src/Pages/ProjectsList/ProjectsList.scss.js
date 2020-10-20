import styled from 'styled-components';

export const ProjectViewStyled = styled.div`
    box-shadow: 1px 1px 5px;
    margin: 10px;
    padding: 5px;
    width: 300px;
    height: 300px;
    overflow: auto;
`;

export const ProjectsViewStyled = styled.ul`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;

export const ProjectWarningStyled = styled.div`
    color: red;
`;

export const ProjectHeaderStyled = styled.h3`
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all .2s;
    &:hover {
        border-bottom: 2px solid;
        letter-spacing: 1px;
    }
`;