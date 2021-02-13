import React from 'react'
import { Link, withRouter } from "react-router-dom";

import "./department-item.styles.css"

function DepartmentItem(props) {
    const { images: { bigImageUrl }, title, routeName, location, _id } = props;
    return (
        <div className="col-md-3 col-12 my-4">
            <Link to={{pathname:`${routeName}/${_id}`, state:{ previousPath: location.pathname} }} className="link">
                <div className="department-product">
                    <div className="img-container text-center">
                        <img src={bigImageUrl} alt="product" />
                    </div>
                    <h3 className="text-center department-product-h3">{title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(DepartmentItem)