import React from 'react'
import { Link, withRouter } from "react-router-dom"

import "./items-preview-item.styles.css"

function ItemsPreviewItem({ items, match, location }) {
    const {id, imageUrl, title,  price, } = items;
    return (
        <div className="card col-md-2 m-3 col-12 items-preview-card-container">
            <Link 
                to={{ pathname:`${match.url}/${id.toString()}`, state:{ previousPath: location.pathname }}}
                className="items-preview-link">
                <img className="card-img-top" src={imageUrl} alt="Card  cap" />
                <div className="card-body items-preview-card-body mt-2 text-center ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">$ {price} </p>
                </div> 
            </Link>
        </div>
    )
}

export default withRouter(ItemsPreviewItem)