import classNames from 'classnames';
import React from 'react'
import "./Button.css";

function Button({ onClick, type, children, size = 's' }) {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn-small': size === 's',
        'btn--medium': size === 'm',
    })
    return (
        <div>
            <button className={btnClass} onClick={onClick}>
                { children }
            </button>
        </div>
    )
}

export default Button;
