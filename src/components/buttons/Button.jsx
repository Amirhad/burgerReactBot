import React from 'react';
import './buttons.css';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button;