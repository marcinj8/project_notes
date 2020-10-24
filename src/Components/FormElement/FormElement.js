import React, { useMemo } from 'react';
import Select from './select';

const FormElement = ({ elementType, label, placeholder, options, changeHandler, id }) => {

    const formElement = useMemo(() => {
        switch (elementType) {
            case 'inputText':
                return (
                    <input
                        id={id}
                        onChange={changeHandler}
                        type="text"
                        placeholder={placeholder}
                    />
                );
            case 'inputNumber':
                return (
                    <input
                        id={id}
                        onChange={changeHandler}
                        type="number"
                        placeholder={placeholder}
                    />);
            case 'inputDate':
                return (
                    <input
                        id={id}
                        onChange={changeHandler}
                        type="date"
                        placeholder={placeholder}
                    />);
            case 'select':
                return (
                    <Select
                        id={id}
                        onChange={changeHandler}
                        options={options}
                        placeholder={placeholder}
                    />);
            default: return null;
        }
    }, [elementType])

    return (
        <div>
            {
                label
                    ? <label>{label} </label>
                    : null
            }
            {formElement}
        </div>
    )
}

export default FormElement;