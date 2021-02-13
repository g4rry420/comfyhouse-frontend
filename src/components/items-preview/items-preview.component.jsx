import React from 'react'

import "./items-preview.styles.css"
import ItemsPreviewItem from '../items-preview-item/items-preview-item.component'

function ItemsPreview({ state }) {
    return (
        <section className="container">
            <div className="row">
                {state.map((item) => {
                    return (
                        <ItemsPreviewItem key={item._id} items={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default ItemsPreview