import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route } from "react-router-dom"

import Spinner from "../../components/spinner/spinner.component"
import API from "../../API"
import ProductDetails from '../../components/product-details/product-details.component';

const IndividualItem = lazy(() => import("../../components/individual-item/individual-item.component"));

export default function IndividualItemContainer({ match}) {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        if(!!!match.params._id) return;

        const { _id } = match.params;
        fetch(`${API}/productdetails`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_id})
        })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    setProductDetails(data.productDetails)
                }else{
                    console.log(data)
                }
            })
            .catch(err => console.log(err))
    },[])


    return (
        <div>
        <Suspense fallback={<Spinner/>}>
        {
            productDetails ? <Route path={match.path} render={() => <IndividualItem state={productDetails[0]} />} />
                : <Spinner/>
        }   
        </Suspense>
        </div>
    )
}
