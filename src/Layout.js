import React, { useState } from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from './Pages/Navigation/Navigation';

import { LayoutStyled, ContainerStyled } from './Layout.scss';
import { Footer } from './Pages';
import { Button } from './Components';

import { ShowWindowDimensions, createBrowserHistory } from './Utils'

const Layout = () => {

    const [isNavbarOpen, toggleNavbar] = useState(false);
    const width = window.innerWidth
    console.log(width)
    const footerConfig = {
        background: 'silver'
    }

    console.log(ShowWindowDimensions())

    return (
        <Router history={createBrowserHistory}>
            <LayoutStyled>
                <Button
                    type="menu"
                    click={() => toggleNavbar(true)}>menu</Button>
                <Navigation
                    show={isNavbarOpen}
                    toggleNavbar={toggleNavbar} />
                <ContainerStyled>
                    <Switch>
                        <Route path="/settings">
                            settings
                    </Route>
                        <Route path="/new_project">
                            new_project
                    </Route>
                        <Route path="/choose_project">
                            choose_project
                    </Route>
                        <Route path="/">
                            start
                    </Route>
                    </Switch>
                </ContainerStyled>
                <Footer config={footerConfig}>
                    Design Marcin Janerka - Marcin@Janerka.com - 2020
            </Footer>
            </LayoutStyled>
        </Router>
    )
}

export default Layout;