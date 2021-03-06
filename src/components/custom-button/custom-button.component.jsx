import React from 'react'

import "./custom-button.styles.css"

export default function CustomButton({ title, button, type, onClick, ...otherProps }) {
    return (
        <button type={type} onClick={onClick} {...otherProps} className={`btn custom-button ${button}`}>
            <div className="p-2"> {title} </div>
        </button>
    )
}
