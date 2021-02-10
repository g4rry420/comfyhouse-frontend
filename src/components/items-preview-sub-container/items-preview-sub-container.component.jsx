import React, { useContext } from 'react'

import ItemsPreview from '../../components/items-preview/items-preview.component'
import Heading from "../Heading/heading.component"
import { ShopProductsContext } from '../../context/shopProducts/shopProductsContext'
import Spinner from "../spinner/spinner.component"

export default function ItemPreviewSubContainer({ match }) {
    const { products, objectsToArray } = useContext(ShopProductsContext);
    let data;
    if(products.shopProducts){
        data = objectsToArray(objectsToArray(objectsToArray(products.shopProducts).find(product =>  product.routeName === match.params.particularDepartment).items)
                    .map(element => element.items).find(item => objectsToArray(item).find(element => element.routeName === match.params.itemPreview)))
                    .filter(element => element.routeName === match.params.itemPreview)
    }
    return (
        <div>
            <Heading 
                title={products.shopProducts ? data[0].title : <Spinner/>}
                display="display-4" textCase="text-uppercase" h1="heading-in-items-preview-container" />
            {
                products.shopProducts ? <ItemsPreview state={data[0]}  /> : <Spinner/>
            }  
        </div>
    )
}
