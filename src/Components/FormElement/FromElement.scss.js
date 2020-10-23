import React, { useMemo } from 'react';

const FormElement = ({ type }) => {

    const formElement = useMemo(() => {
        switch(type) {
            case 'input': return  <input type="" name="" value=""/>;
            default: null;
        }
    })

    return <div>
        form element
    </div>
}

export default FormElement;