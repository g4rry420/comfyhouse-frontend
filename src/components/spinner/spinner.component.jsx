import React from 'react'

import "./spinner.styles.css"

export default function Spinner() {
    return (
        <>
        <div className="spinner-overlay">
            <div className="spinner-container">
            </div>
        </div>
        <p>The backend is hosted in Glitch.So, it might take a minute to load. Please, wait. Thank You</p>
        </>
    )
}
