import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationItemStyled } from './Navigation.scss';

const NavigationItem = ({ children, link, clicked, show }) => {

    const activeLinkStyle = {
        fontWeight: "bold",
        color: 'gold'
    }
    if(!show) {
        return null;
    }

    return (
        <NavigationItemStyled
            onClick={() => clicked(false)}
            className='navigationItems'>
            <NavLink
                exact
                activeStyle={activeLinkStyle}
                to={link}>
                {children}
            </NavLink>
        </NavigationItemStyled>
    )
}

export default NavigationItem;