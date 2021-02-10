import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import "./items-preview.styles.css"
import ItemsPreviewItem from '../items-preview-item/items-preview-item.component'
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

function ItemsPreview({ state }) {
    const { objectsToArray } = useContext(ShopProductsContext)
    return (
        <section className="container">
            <div className="row">
                {objectsToArray(state.items).map((item) => {
                    return (
                        <ItemsPreviewItem key={item.id} items={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default withRouter(ItemsPreview)