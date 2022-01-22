import React from 'react';

const Alert = (props) => {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return props.alert && <div className='container w-75'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>

    </div>;
};

export default Alert;
