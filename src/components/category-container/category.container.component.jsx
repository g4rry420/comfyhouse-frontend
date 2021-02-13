import React, { useEffect, useState } from 'react'

import CategoryHeader from "../category-header/category-header.component"
import CategoryMainSection from '../category-mainSection/category-mainSection.component'
import Spinner from "../spinner/spinner.component"
import API from "../../API"

export default function CategoryContainer({ match }) {
    const [subDepartments, setSubDepartments] = useState(null)

    useEffect(() => {
        const { departmentId } = match.params;
        fetch(`${API}/subdepartments`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({departmentId})
        })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    setSubDepartments(data.subdepartments)
                }else{
                    console.log(data)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <CategoryHeader state={ subDepartments ? subDepartments : <Spinner/>} />
            <CategoryMainSection state={subDepartments ? subDepartments : <Spinner/>} />
        </div>
    )
}
