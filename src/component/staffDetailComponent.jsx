import "./staffDetailComponent.css"
import { STAFFS } from "../staffs"
import { useParams } from 'react-router-dom';
import dateFormat from "dateformat";
export default function StaffDetailComponent(){
  const {id}=useParams();
  
    return(
        <div className="card center card-radius-2  ml-6 mr-6 mt-2 mb-2">
          
            <header className="card-header">
 <p className="card-header-title">
   Employee {STAFFS[id].id}
 </p>
 
</header>
<div className="card-content">
 <div className="content">
 <p className="is-7 has-text-dark"><img src={STAFFS[id].image} alt=''/>   </p>
   <p className="Name is-6 has-text-dark ">Full name: {STAFFS[id].name}</p>
   <p className="is-7 has-text-dark">Date of birth: {dateFormat(STAFFS[id].doB,"dd/mm/yy")}</p>
   <p className="is-7 has-text-dark">Start working at: {dateFormat(STAFFS[id].startDate,"dd/mm/yy")}  </p>
   <p className="is-7 has-text-dark">Department: {STAFFS[id].department.id} - {STAFFS[id].department.name} </p>
   <p className="is-7 has-text-dark">Days off left: {STAFFS[id].annualLeave}</p>
   <p className="is-7 has-text-dark">OT days: {STAFFS[id].overTime} </p>

 </div>
</div>
       
           
            
          </div>
    )
}