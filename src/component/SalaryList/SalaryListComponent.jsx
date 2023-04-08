import { useState } from "react"
import { STAFFS } from "../../data/staffs"
import { getStaffsSalaries } from "../../redux/thunk/staffsSalaries/getStaffsSalaries"
import './SalaryListComponent.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

export default function SalaryListComponent() {
    useEffect(()=>{
        dispatch (getStaffsSalaries())
     },[])
 
     const dispatch= useDispatch()
     const staffsSalaries= useSelector(state=>state.staffSalary.staffSalaryInfo)
    
     console.log("staffs salaries: ",staffsSalaries)
    // const [staffs, setStaffs] = useState(STAFFS)
    return (
        <>
            <div className="title ">
                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Salary</strong> </p>
            </div>
            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">
                {staffsSalaries.map((s) => (
                    <div className="column is-2">
                        <div className="card">
                            <header className="card-header ">
                                <p className="card-header-title is-centered">
                                    Employee {s._id + 1}
                                </p>

                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div>
                                        <p className=" has-text-dark is-centered"><img src={s.image} alt='' />   </p>
                                    </div>
                                    <div className="card-content-info">
                                        <p><strong >ID : </strong>{s._id}</p>
                                        <p><strong >Salary scale : </strong>{s.salaryScale}</p>
                                        <p><strong >Over time : </strong>{s.overTime}</p>
                                    </div>

                                </div>
                            </div>
                            <footer className="card-footer ">
                                <p className="ml-6 mt-2 mb-2"><strong  >Salary: {parseInt(s.salaryScale * 3000000 + s.overTime * 200000)}</strong></p>
                            </footer>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}