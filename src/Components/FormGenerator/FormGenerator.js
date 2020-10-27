import React from 'react';
import { FormElement } from '../FormElement';

import formData from '../../Pages/NewProject/newProjectProperties.json';

const FormGenerator = ({ formDataObj, changeHandler, parent, submit }) => {

    const form = Object.keys(formDataObj).map(item => {
        // import z newProject/data jako funkcja pomocnicza??
        if (formDataObj[item].value === 'object') {
            const itemData = formData.secondary
                .find(itemData => itemData.parent === item);
            return (
                <React.Fragment>
                    <FormElement
                        key={item + 'name'}
                        id={item + 'name'}
                        {...formDataObj[item]}
                        changeHandler={changeHandler}
                    />
                    <button>add todo</button>
                    <FormGenerator
                        changeHandler={changeHandler}
                        formDataObj={itemData.details}
                        parent={item}
                    />
                </React.Fragment>
            );
        }
        return (
            <FormElement
                key={parent ? parent + item : item}
                id={parent ? parent + item : item}
                {...formDataObj[item]}
                changeHandler={changeHandler}
            />
        )
    })

    return form;
}

export default FormGenerator;