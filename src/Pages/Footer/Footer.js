import React from 'react';

import { MainFooterStyled } from './Footer.scss';

const Footer = ({ children, config }) => (
    <MainFooterStyled config={config}>
        {children}
    </MainFooterStyled>
)

export default Footer;