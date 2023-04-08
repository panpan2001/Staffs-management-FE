
import { NavLink, Outlet } from "react-router-dom";
export default function Asm2Layout() {
    return (
        <>
            {/* <header className="header ">
                <p className='  ml-6'><strong className='is-size-3 has-text-primary'>Employees Management</strong> </p>
                <div className="buttons is-centered">
                    <button className="button is-warning"><NavLink to="/asm2">Employee</NavLink></button>
                    <button className="button is-primary"><NavLink to="/asm2/list_department">Department</NavLink></button>
                    <button className="button is-danger"><NavLink to="/asm2/list_salary">Salary</NavLink></button>

                </div>

               
            </header> */}
            <main className="main has-background-color-info">

                <Outlet />
            </main>

        </>
    )
}