import './staffListComponent.css';
import { STAFFS, DEPARTMENTS, ROLE } from "../staffs";
import { useState } from 'react';
import {Link} from 'react-router-dom'
export default function StaffListComponent() {
    const [staff, setStaff] = useState(STAFFS)
    console.log(staff)
    return (
        <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered   ">
            {staff.map((s) => (
                <div className="column is-3  ">
                    <Link to={`${s.id}`}>
                    {s.name}
                    </Link>
                    </div>
            ))}
        </div>
    )
}