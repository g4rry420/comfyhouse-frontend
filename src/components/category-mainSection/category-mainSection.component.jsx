import React,{ useContext } from 'react'

import "./category-mainSection.styles.css"
import MainSectionSideHeading from '../mainSection-side-Heading/mainSection-side-Heading.component'
import MainSectionItems from '../mainSection-Items/mainSection-Items.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

function CategoryMainSection({ state }) {
    const { objectsToArray,sortFunction } = useContext(ShopProductsContext)
    return (
        <div>
            <div className="margin-in-mainSection my-5">
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                        {
                            state.items !== undefined ?
                                objectsToArray(state.items).sort(sortFunction()).map((item) => {
                                    return(
                                        <MainSectionSideHeading key={item.id} item={item} /> 
                                    )
                                }) : 
                                    null
                        }

                        </div>  
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                        {
                            state.items !== undefined ?
                                objectsToArray(state.items).sort(sortFunction()).map(item => {
                                return objectsToArray(item.items).sort(sortFunction()).filter((item, idx) => idx < 6 ).map(ite => (
                                    
                                    <MainSectionItems key={ite.id} item={ite} />
                                ))}) :
                                null
                        } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryMainSection