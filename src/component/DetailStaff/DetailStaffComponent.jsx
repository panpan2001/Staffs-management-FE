import "./staffDetailASM2Component.css"
import { useParams } from 'react-router-dom';
import dateFormat from "dateformat";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStaffs } from '../../redux/thunk/staffs/getStaffs';
import { getStaffsById } from "../../redux/thunk/staffs/getStaffsById";

export default function DetailStaffComponent() {
 
 const dispatch= useDispatch()
 const s= useSelector(state=>state.staff.staffInfo)
  const  _id = useParams();
  useEffect(()=>{
    dispatch (getStaffsById(_id.id))
 },[])

console.log("_id",_id)
  return (
  <main className="main ">
  <div className="breadcrumb">
  <nav class="breadcrumb is-medium" aria-label="breadcrumbs">
    <ul>
      <li><NavLink to="/asm2">Employee</NavLink></li>
      <li><NavLink to="#">{s.name}</NavLink></li>
    </ul>
  </nav>
  </div>

  <div className="columns is-centered">
    <div className="column is-one-third"></div>
    <div className="column is-one-third">
      <div className="card center card-radius-2  ml-6 mr-6 mt-2 mb-2">

        <header className="card-header">
          <p className="card-header-title is-centered">
            Employee {s._id + 1}
          </p>

        </header>
        <div className="card-content ">
          <div className="content">
            <p className=" has-text-dark is-centered"><img src={s.image} alt='' />   </p>
            <p className=" has-text-dark "><strong className="is-6">Full name: </strong>{s.name} </p>
            <p className=" has-text-dark"><strong className="is-6">Date of birth: </strong>{dateFormat(s.doB, "dd/mm/yy")}</p>
            <p className=" has-text-dark"><strong className="is-6">Start working at: </strong>{dateFormat(s.startDate, "dd/mm/yy")}  </p>
            <p className=" has-text-dark"><strong className="is-6">Department: </strong> {s.departmentId} </p>
            <p className=" has-text-dark"><strong className="is-6">Days off left: </strong>{s.annualLeave}</p>
            <p className=" has-text-dark"><strong className="is-6">OT days: </strong> {s.overTime} </p>

          </div>
        </div>



      </div>
    </div>
    <div className="column is-one-third"></div>
  </div>

</main>)
    

}