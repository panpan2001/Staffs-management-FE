import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./DepartmentListComponent.css"
import { getDepartments } from "../../redux/thunk/departments/getDepartments"
export default function DepartmentListComponent() {
    useEffect(()=>{
        dispatch(getDepartments())
    },[])
    const dispatch= useDispatch()
    const departments= useSelector(state=> state.department.departmentInfo)
    console.log(departments)
    return (
        <div className="department_component">
            <div className="title ">
            <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Department</strong> </p>

            </div>

            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">

                {departments?.map((d) => (
                    <div className="column is-one-fifth " key={d.id}>

                        <p> <strong className="is-size-4">{d.name}  </strong> </p>
                        <p><strong>Number of  staffs: </strong> {d.numberOfStaffs}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}