import { useState } from "react"
import { NavLink } from "react-router-dom"
import { DEPARTMENTS } from "../../staffs"
export default function DepartmentListComponent() {
    const [departments, setDepartments]= useState(DEPARTMENTS)
    return (
        <>
            <div className="title ">
            <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Department</strong> </p>

            </div>

            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">

                {departments.map((d) => (
                    <div className="column is-one-fifth ">

                        <p> <strong className="is-size-4">{d.name}  </strong> </p>
                        <p><strong>Number of  staffs: </strong> {d.numberOfStaff}</p>

                    </div>
                ))}
            </div>
        </>
    )
}