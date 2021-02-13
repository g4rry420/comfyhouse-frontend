import React,{ useContext } from 'react'

import HeroSection from '../../components/heroSection/heroSection.component'
import Directory from '../../components/directory/directory.component'
import Heading from '../../components/Heading/heading.component'
import "./homepage.styles.css"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function Homepage() {
    const { loading } = useContext(ShopProductsContext);
    const DirectorySpinner = WithSpinner(Directory);
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
