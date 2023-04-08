import {NavLink} from 'react-router-dom'
export default function NavBar(){
return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-start">
                            <NavLink className="navbar-item" to='/'>
                                    Home
                                </NavLink>
                                <NavLink className="navbar-item" to='/asm2'>
                                    Detail Staff
                                </NavLink>
                                <NavLink className="navbar-item" to='/asm2/list_department'>
                                    List Department
                                </NavLink>
                                <NavLink className="navbar-item" to='/asm2/list_salary'>
                                    List Salary
                                </NavLink>
                            </div>
                           
                        </div>
                    </nav>
)
}