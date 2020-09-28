import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationItemStyled } from './Navigation.scss';

const NavigationItem = ({ children, link, clicked }) => {


    return (
        <NavigationItemStyled
            onClick={() => clicked(false)}
            className='navigationItems'>
            <Link to={link}>
                {children}
            </Link>
        </NavigationItemStyled>
    )
}

export default NavigationItem;