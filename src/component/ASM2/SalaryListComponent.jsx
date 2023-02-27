import { useState } from "react"
import { STAFFS } from "../../staffs"
import './SalaryListComponent.css'
export default function SalaryListComponent() {
    const [staffs, setStaffs] = useState(STAFFS)
    return (
        <>
            <div className="title ">
                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Salary</strong> </p>
            </div>
            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">
                {staffs.map((s) => (
                    <div className="column is-3">
                        <div className="card">
                            <header className="card-header ">
                                <p className="card-header-title is-centered">
                                    Employee {s.id + 1}
                                </p>

                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div>
                                        <p className=" has-text-dark is-centered"><img src={s.image} alt='' />   </p>
                                    </div>
                                    <div className="card-content-info">
                                        <p><strong >ID : </strong>{s.id}</p>
                                        <p><strong >Salary scale : </strong>{s.salaryScale}</p>
                                        <p><strong >Over time : </strong>{s.overTime}</p>
                                    </div>

                                </div>
                            </div>
                            <footer className="card-footer ">
                                <p className="ml-6 mt-2 mb-2"><strong  >Salary: </strong>{parseInt(s.salaryScale * 3000000 + s.overTime * 200000)}</p>
                            </footer>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}