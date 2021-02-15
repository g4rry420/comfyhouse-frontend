import React from 'react'

import "./custom-button.styles.css"

export default function CustomButton({ title, button, type, onClick }) {
    return (
        <button type={type} onClick={onClick} className={`btn custom-button ${button}`}>
            <div className="p-2"> {title} </div>
        </button>
    )
}
