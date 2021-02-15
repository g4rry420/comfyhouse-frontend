import React,{ useEffect, useState } from 'react'

import "./department.styles.css"
import DepartmentItem from '../department-item/department-item.component';
import API from "../../API" 
import Spinner from "../spinner/spinner.component"

function Department() {
    const [departments, setDepartments] = useState(null)
    useEffect(() => {
        fetch(`${API}/departments`)
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    setDepartments(data.department)
                }else{
                    console.log(data)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="row">
        {
            departments ? departments.map(department => (
                <DepartmentItem key={department._id} {...department} />
            )) : <Spinner/>
        }
        </div>
    )
}

export default Department