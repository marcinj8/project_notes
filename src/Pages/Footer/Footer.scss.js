import styled from 'styled-components';

const FooterStyled = styled.footer`
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: 100%;
    background: ${props => props.config.background || props.theme.color.main.light};
`

export const MainFooterStyled = styled(FooterStyled)`

`

export const NavigationFooterStyled = styled(FooterStyled)`
    
`