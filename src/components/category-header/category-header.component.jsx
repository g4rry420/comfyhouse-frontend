import React from 'react'
import { withRouter } from "react-router-dom"

import "./category-header.styles.css"
import CategoryLinks from '../category-links/category-links.component'
import Spinner from '../spinner/spinner.component';

function CategoryHeader({ state }) {
    if((state[0] === undefined) && (!!!state.length)) return <Spinner/>
    return (
        <div className="container-fluid background-for-category py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                    <h2 className="display-5 font-weight-bold">{state[0].department.title}</h2>
                        <div className="row">
                            {
                                state.map(item => (
                                        <CategoryLinks key={item._id} item={item} /> 
                                    ))
                            }
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="category-img-container">
                            <img src={state[0].mainImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CategoryHeader)