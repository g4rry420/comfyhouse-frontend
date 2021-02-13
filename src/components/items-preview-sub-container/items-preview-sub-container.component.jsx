import React, { useEffect, useState } from 'react'

import ItemsPreview from '../../components/items-preview/items-preview.component'
import Heading from "../Heading/heading.component"
import Spinner from "../spinner/spinner.component"
import API from "../../API"

export default function ItemPreviewSubContainer({ match }) {
    const [products, setProducts] = useState(null)
    
    useEffect(() => {
        if(!!!match.params.subDepartmentItemId) return;
        const { subDepartmentItemId } = match.params
        fetch(`${API}/products`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({subDepartmentItemId})
        })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    setProducts(data.products)
                }else{
                    console.log(data)
                }
            })
    },[])

    return (
        <div>
            <Heading 
                title={match.params.itemPreview ? match.params.itemPreview : <Spinner/>}
                display="display-4" textCase="text-uppercase" h1="heading-in-items-preview-container" />
            {
                products ? <ItemsPreview state={products}  /> : <Spinner/>
            } 
        </div>
    )
}
