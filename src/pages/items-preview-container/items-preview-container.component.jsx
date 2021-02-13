import React, { lazy, Suspense }  from 'react'
import { Route } from "react-router-dom"

import "./items-preview-container.styles.css"
import Spinner from "../../components/spinner/spinner.component"

const ItemPreviewSubContainer = lazy(() => import("../../components/items-preview-sub-container/items-preview-sub-container.component"));
const IndividualItemContainer = lazy(() => import("../individual-item-container/individual-item-container.component"));

function ItemsPreviewContainer({ match }) {
    return (
        <div>
        <Suspense fallback={<Spinner/>}>
            <Route exact path={`${match.path}`} component={ItemPreviewSubContainer} />
            <Route path={`${match.path}/:_id`} component={IndividualItemContainer} /> 
        </Suspense>
        </div>
    )
}

export default ItemsPreviewContainer