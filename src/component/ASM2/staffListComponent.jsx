import './staffListASM2Component.css';
import { STAFFS, DEPARTMENTS, ROLE } from "../../staffs";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom'
// function LowerCaseSearch(a){
//     a= a.split(" ")
//     a=a.join('')
//     a=[...a]
//     a=a.toString().toLowerCase()
//     return a
// }
export default function StaffListComponent() {
    const [staff, setStaff] = useState(STAFFS)
    const [search,setSearch]= useState("")
    // console.log(staff)
    return (
        <>
            <div className="title ">
            
                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Emloyees</strong> </p>
                <div className="field  has-addons has-addons-centered  " onChange={(e)=>setSearch(e.target.value)}>
                    <div className="control">
                        <input className="input" type="text" placeholder="Search " />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </div>
            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">

                {staff.filter((item)=>{
                    return search ==="" ? item: (item.name.toLowerCase().includes(search)||item.name.includes(search))
                }).
                map((s) => (
                    <div className="column is-2 " key={s.id}>

                        <Link to={`detail/${s.id}`}>
                            <div className="card-image" id='card_image_list'>
                                <figure className="image is-128x128">
                                    <img src={s.image} alt='' />
                                </figure>
                            </div>
                            {s.name}
                        </Link>

                    </div>
                ))}
            </div>
        </>

    )

}