import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./directory.styles.css"
import Department from '../department/department.component';

export default function Directory() {
    return (
        <section className="container directory">
                <Department  />
        </section>
    )
}
