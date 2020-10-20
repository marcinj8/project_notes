import styled from 'styled-components';

export const NavigationStyled = styled.nav`
    color: ${props => props.theme.color.font.light};
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    min-width: 250px;
    padding: 25px 0;
    height: 100vh;
    background: gray;
    box-shadow: 5px 0 5px ;
    z-index: 100;
    transform: translateX(-100%);
`;

export const NavigationItemsListStyled = styled.ul`
    margin: 30px auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
    width: 80%;
    overflow: hidden;
`;

export const NavigationItemStyled = styled.li`
    transform: translateX(-250px);
    opacity: 0;
    list-style: none;
    margin: 10px auto;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        transform: scale(1.1);
    }
    a {
        color: ${props => props.theme.color.font.light};
        text-decoration: none;
        text-transform: uppercase;
    }
`