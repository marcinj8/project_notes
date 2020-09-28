import styled from 'styled-components';

const ButtonStyled = styled.button`
    color: ${props => props.theme.color.font.light};
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
    border: 1px solid ${props => props.theme.color.font.light};
`;

export const SecondaryButtonStyled = styled(ButtonStyled)`
    border-bottom: 1px solid ${props => props.theme.color.font.light};
    
`;

export const ProjectTileButtonStyled = styled(ButtonStyled)`
    height: ${props => props.theme.tile.small};
    width: ${props => props.theme.tile.small};
    border: 1px solid ${props => props.theme.color.font.light};
    border-radius: 5px;
`;

export const MenuButtonStyled = styled(ButtonStyled)`
    position: absolute;
    padding: 8px;
    left: 2%;
    top: 2%;
    border-left: 1px solid ${props => props.theme.color.font.light};
    transition: all .2s ease;
    &:hover {
        padding: 8px 14px
    }
`;

export const CloseMenuButtonStyled = styled(MenuButtonStyled)`
    left: 0;
    top: 0;
    border-left: 1px solid ${props => props.theme.color.font.light};
    color: red;
    text-shadow: 0 0 1px black;
    font-size: ${props => props.config.fontSize};
    transform: rotate(225deg);&:hover {
        padding: 14px 14px
    }
`;