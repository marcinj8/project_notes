import React from 'react';
import { FormElement } from '../FormElement';

const FormGenerator = ({ formDataObj, changeHandler, submit }) => {

    const form = Object.keys(formDataObj).map(item => {
        return (
            <FormElement
                key={item}
                id={item}
                {...formDataObj[item]}
                changeHandler={changeHandler}
            />
        )
    })

    return form;
}

export default FormGenerator;