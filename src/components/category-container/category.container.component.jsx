import React, { useContext } from 'react'

import CategoryHeader from "../category-header/category-header.component"
import CategoryMainSection from '../category-mainSection/category-mainSection.component'
import { ShopProductsContext } from '../../context/shopProducts/shopProductsContext'
import { Spinner } from 'react-bootstrap';

export default function CategoryContainer({ match }) {
    const { products, objectsToArray } = useContext(ShopProductsContext);
    let data;
    if(products.shopProducts){
        data = objectsToArray(products.shopProducts).find(product => "/" + product.routeName === match.url);
    }
    return (
        <div>
            <CategoryHeader state={products.shopProducts ? data : <Spinner/>} />
            <CategoryMainSection state={products.shopProducts ? data : <Spinner/>} />
        </div>
    )
}
