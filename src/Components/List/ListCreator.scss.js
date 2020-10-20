import styled from 'styled-components';

export const ListItemStyled = styled.li`
    margin: 3px auto;
    padding: 3px;
`;

export const ListItemHeaderStyled = styled.h5`
    margin: 2px auto;
    text-align: center;
    width: 100%;
`;

export const CreatedListStyled = styled.ul`
    list-style: none;
    height: 0;
    opacity: 0;
    padding: 0;
    overflow: hidden;
    background: rgba(102, 102, 102, .4);
    box-shadow: inset 0 0 8px;
    text-align: left;
`;

export const ListHeaderStyled = styled.h4`
    cursor: pointer;
    text-decoration: underline;
    margin: 5px auto 0 auto;
    padding: 3px;
    transition: all .2s;
    background: lightgrey;
    box-shadow: ${props => props.isListShow ? "0 0 3px black" : 'none'};
    &:before{
        content: '${props => props.isListShow ? " - " : " + "}';
        color:${props => props.isListShow ? "red" : "green"}
    }
`;