import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { NavigationItemStyled } from './Navigation.scss';

const NavigationItem = ({ children, link, clicked, show, isExactRequired, projectKeyReducer }) => {

    let activeLinkStyle = {
        fontWeight: "bold",
        color: 'gold'
    };
    const linkPath = useMemo(() => {
        if (link === '/project') {
            if (projectKeyReducer === '') {
                activeLinkStyle = {
                    fontWeight: "bold",
                    color: 'red'
                };
                return '/choose_project';
            } else {
                return link + '/' + projectKeyReducer;
            }
        }
        else {
            return link;
        }
    }, [projectKeyReducer, link])

    if (!show) {
        return null;
    }

    return (
        <NavigationItemStyled
            onClick={() => clicked(false)}
            className='navigationItems'>
            <NavLink
                exact={isExactRequired}
                activeStyle={activeLinkStyle}
                to={linkPath}>
                {children}
            </NavLink>
        </NavigationItemStyled>
    )
}

const mapStateToProps = state => {
    return {
        projectKeyReducer: state.singleProjectReducer.currentProjectKey
    }
}

export default connect(mapStateToProps)(NavigationItem);