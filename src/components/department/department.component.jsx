import React, {useContext } from 'react'

import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import "./department.styles.css"
import DepartmentItem from '../department-item/department-item.component';
 
function Department() {
    const { products, objectsToArray } = useContext(ShopProductsContext);
    return (
        <div className="row">
        {objectsToArray(products.shopProducts).map( ({ id, ...otherProps  }) => {
                return (
                    <DepartmentItem key={id} {...otherProps} />
                )
            })
        }  
        </div>
    )
}

export default Department