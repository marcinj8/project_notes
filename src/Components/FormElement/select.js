import React from 'react';

const Select = ({ options }) => {

    const otpionsList = options.map(item => {
        return (
            <option key={item} value={item}>{item}</option>
        )
    })

    return (
        <select>
            {otpionsList}
        </select>
    );
}

export default Select;