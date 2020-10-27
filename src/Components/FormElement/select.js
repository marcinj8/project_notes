import React from 'react';

const Select = ({ options, changeHandler, id }) => {

    const otpionsList = options.map(item => {
        return (
            <option key={item} value={item}>{item}</option>
        )
    })

    return (
        <select
            id={id}
            onChange={changeHandler} >
            {otpionsList}
        </select>
    );
}

export default Select;