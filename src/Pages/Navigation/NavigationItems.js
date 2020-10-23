import React from 'react';

import navConfig from './config.json';

import NavigationItem from './NavigationItem';

import { NavigationItemsListStyled } from './Navigation.scss';

const OVERLAPS = navConfig.overlaps;

const NavigationItems = ({ toggleNavbar }) => {

    const navigationItems = Object.keys(OVERLAPS).map(item => {
        return (
            <NavigationItem
                clicked={toggleNavbar}
                className='navigationItems'
                link={OVERLAPS[item].link}
                key={item}
                show={OVERLAPS[item].show}
                isExactRequired={OVERLAPS[item].exactPathRequired}
                >
                {OVERLAPS[item].name}
            </NavigationItem>
        )
    })

    return (
        <NavigationItemsListStyled>
            {navigationItems}
        </NavigationItemsListStyled>
    )
}

export default NavigationItems;