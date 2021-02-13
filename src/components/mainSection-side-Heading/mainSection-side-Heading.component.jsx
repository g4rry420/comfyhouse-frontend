import React from 'react'

import "./mainSection-side-Heading.styles.css"
import Heading from "../Heading/heading.component"

export default function MainSectionSideHeading({ item }) {
    return (
        <div className="col-md-2 mainSection-heading-container" id={item._id}>
            <div className="heading-container">
                <Heading 
                    title={item.title} 
                    display="display-5" h1="heading-in-MainSection" />
                <div className="div"></div>
            </div>    
        </div> 
    )
}
