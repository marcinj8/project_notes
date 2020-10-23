import React from 'react';
import { Modal } from '../Modal';

const StatusHandler = ({ status, error = null }) => {
    if (error !== null) {
        console.log(error)
        return (
            <Modal>
                Unfortunately, error occured. Please try again.
            </Modal>
        )
    }

    if (status === 'success') {
        return null
    }

    return (
        <Modal>
            {status}
        </Modal>
    )
}

export default StatusHandler;