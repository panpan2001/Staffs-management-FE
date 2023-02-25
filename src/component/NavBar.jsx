import {NavLink} from 'react-router-dom'
export default function NavBar(){
return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-start">
                            <NavLink className="navbar-item" to='/'>
                                    Home
                                </NavLink>
                                <NavLink className="navbar-item" to='/asm1'>
                                    ASM-ReactJS1
                                </NavLink>
                                <NavLink className="navbar-item" to='/asm2'>
                                    ASM-ReactJS2
                                </NavLink>
                                <NavLink className="navbar-item" to='#'>
                                    ASM-ReactJS3
                                </NavLink>
                                <NavLink className="navbar-item" to='#'>
                                    ASM-ReactJS4
                                </NavLink>
                            </div>
                           
                        </div>
                    </nav>
)
}