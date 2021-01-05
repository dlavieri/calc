import React from 'react';

const Input = ({ value, onChange }) => {

    return (
        <input className="display" value={value} onChange={onChange}/>
    )
}

export default Input;