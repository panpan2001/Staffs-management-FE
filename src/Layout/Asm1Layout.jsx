import StaffDetailComponent from "../component/staffDetailComponent";
import StaffListComponent from "../component/staffListComponent";
import { Link,Outlet } from "react-router-dom";
export default function Asm1Layout() {
    return (
        <>
            <header className="header">
               
                <p className='  ml-6'><strong className='is-size-3 has-text-primary'>Employees Management</strong> </p>

            </header>
            <main className="main has-background-color-info">
                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Emloyees</strong> </p>
                <StaffListComponent />
                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> Detail Emloyee</strong> </p>
                <div className="columns ml-6 mr-6 mt-3 is-multiline ">
                   <Outlet/>
                </div>

            </main>
            
        </>
    )
}