import React, { lazy, Suspense } from 'react'
import { Route } from "react-router-dom"

import './sub-department.styles.css'
import ScrollToTop from "../../components/scrollToTop/scrollToTop"
import Spinner from "../../components/spinner/spinner.component"

const CategoryContainer = lazy(() => import("../../components/category-container/category.container.component"));
const ItemsPreviewContainer = lazy(() => import("../items-preview-container/items-preview-container.component"));

function SubDepartment({ match }) {
    return (
        <div>
            <ScrollToTop/>
            <Suspense fallback={<Spinner/>}>
                <Route exact path={match.path} component={CategoryContainer} />
                <Route path={`${match.path}/:itemPreview`} component={ItemsPreviewContainer} />
            </Suspense>
        </div>
    )
}

export default SubDepartment