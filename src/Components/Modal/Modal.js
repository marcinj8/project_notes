import React from 'react';
import { Backdrop } from '../Backdrop';

import { ModalStyled } from './Modal.scss';

const Modal = ({ children, click }) => {

    return (
        <Backdrop show >
            <ModalStyled>
            {children}
            </ModalStyled>
        </Backdrop>
    )
}

export default Modal;