import React from 'react'

import "./arrow-image-left.styles.css"

export default function ArrowImageLeft({ arrowImageLeft, className }) {
    return (
        <div onClick={arrowImageLeft} className={`arrow-left-circle ${className}`}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
            </svg>
        </div>
    )
}
