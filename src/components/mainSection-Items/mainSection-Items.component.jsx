import React from 'react'
import { Link, withRouter } from "react-router-dom"

import "./mainSection-Items.styles.css"

function MainSectionItems({ item, match,location }) {
    const { imageUrl, title, routeName, _id } = item;
    return (
        <div className="my-4 py-4 mainSection-items-container">
            <Link to={{ pathname: `${match.url}/${routeName}/${_id}`, state:{previousPath: location.pathname}}} >
                <div className="mainSections-items text-center">
                    <div className=" text-center mainSections-Image-container">
                        <img src={imageUrl} alt=""  />
                    </div>
                    <div className="mainSection-items-heading">
                        <p className="">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(MainSectionItems)
