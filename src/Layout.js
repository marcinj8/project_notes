import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";

import { LayoutStyled, ContainerStyled } from './Layout.scss';
import { Footer, ProjectsListContainer, Navigation, Home, Project, NewProject } from './Pages';
import { Button, Modal } from './Components';

import { ShowWindowDimensions, createBrowserHistory } from './Utils'

const Layout = ({ loading, isLoaded }) => {

    const [isNavbarOpen, toggleNavbar] = useState(false);
    const width = window.innerWidth
    // console.log(width)
    const footerConfig = {
        background: 'silver'
    }
    // console.log(ShowWindowDimensions())

    if (loading) {
       return <Modal>Loading...</Modal>
    }

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
                            settings - no container yet
                        </Route>
                        <Route path="/new_project">
                            <NewProject />
                        </Route>
                        <Route path="/choose_project">
                            <ProjectsListContainer 
                                isLoaded={isLoaded}
                            />
                        </Route>
                        <Route path="/project/:projectId">
                            <Project />
                        </Route>
                        <Route exact path="/">
                            <Home />
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

const mapStateToProps = state => {
    return {
        loading: state.projectsReducer.loading,
        isLoaded: state.projectsReducer.isLoaded
    }
}

export default connect(mapStateToProps)(Layout);