import React from 'react'

import HeroSection from '../../components/heroSection/heroSection.component'
import Directory from '../../components/directory/directory.component'
import Heading from '../../components/Heading/heading.component'
import "./homepage.styles.css"

export default function Homepage() {
    return (
        <div>
            <HeroSection/>
            <div id="shopNow">
                <Heading title="Shop By Department" display="display-3" h1="homepage-h1" />
            </div>
            <Directory />
        </div>
    )
}
