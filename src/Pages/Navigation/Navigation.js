import React, { useEffect, useRef } from 'react';
import { Backdrop } from '../../Components';
import { Footer } from '../Footer';

import { NavigationStyled } from './Navigation.scss';

import { showNavigation, hideNavigation } from './NavigationAnimation';
import NavigationItems from './NavigationItems';
import { Button } from '../../Components';

import { currentDate } from '../../Utils';

const Navigation = ({ show, toggleNavbar }) => {

    const navigationRef = useRef(null);
    const footerConfig = {
        background: 'transparent'
    }

    useEffect(() => {
        if (show) {
            showNavigation(navigationRef);
        }
        if (!show) {
            hideNavigation(navigationRef);
        }
    })

    return (
        <React.Fragment>
            <Backdrop
                show={show}
                clicked={() => toggleNavbar(false)} />
            <NavigationStyled ref={navigationRef}>
                [logo]
                <div>
                    Navigation
                </div>
                <NavigationItems
                    toggleNavbar={toggleNavbar} />
                <Button
                    type="close"
                    config={{ color: 'red', fontSize: '1.5rem' }}
                    click={() => toggleNavbar(false)}>
                    +
                </Button>
                <Footer config={footerConfig}>
                    <span>{currentDate.day}</span>
                    <span> {currentDate.month} </span>
                    <span>{currentDate.year}</span>
                    <span> | {currentDate.weekDay}</span>
                </Footer>
            </NavigationStyled>
        </React.Fragment>
    )
}

export default Navigation;