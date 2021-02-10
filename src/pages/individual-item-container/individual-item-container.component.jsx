import React, { lazy, Suspense, useContext } from 'react'
import { Route } from "react-router-dom"

import Spinner from "../../components/spinner/spinner.component"
import { ShopProductsContext } from '../../context/shopProducts/shopProductsContext';

const IndividualItem = lazy(() => import("../../components/individual-item/individual-item.component"));

export default function IndividualItemContainer({ match}) {
    const {products, objectsToArray} = useContext(ShopProductsContext)
    let data;
    let mainData;
    if(products.shopProducts){
        data = objectsToArray(objectsToArray(objectsToArray(products.shopProducts).find(product =>  product.routeName === match.params.particularDepartment).items)
                    .map(element => element.items).find(item => objectsToArray(item).find(element => element.routeName === match.params.itemPreview)))
                    .filter(element => element.routeName === match.params.itemPreview)
        
        mainData = objectsToArray(data[0].items).filter(item => item.id.toString() === match.params.id)       
    }

    return (
        <div>
        <Suspense fallback={<Spinner/>}>
            {
                products.shopProducts ? <Route path={match.path} render={() => <IndividualItem state={mainData[0]} />} />
                    : <Spinner/>
            }
            
        </Suspense>
        </div>
    )
}
