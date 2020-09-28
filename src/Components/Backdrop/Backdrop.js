import React from 'react';

import BackdropStyled from './Backdrop.scss';

const Backdrop = ({ show, children, clicked }) => {
    return show
        ? (
            <BackdropStyled onClick={clicked}>
                {children}
            </BackdropStyled>
        )
        : null
}

export default Backdrop;