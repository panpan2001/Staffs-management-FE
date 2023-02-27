import "./staffDetailComponent.css"
import { STAFFS } from "../../staffs"
import { useParams } from 'react-router-dom';
import dateFormat from "dateformat";
export default function StaffDetailASM1Component() {
  const { id } = useParams();

  return (
    <div className="card center card-radius-2  ml-6 mr-6 mt-2 mb-2">

      <header className="card-header">
        <p className="card-header-title">
          Employee {STAFFS[id].id + 1}
        </p>

      </header>
      <div className="card-content">
        <div className="content">
          <p className=" has-text-dark"><img src={STAFFS[id].image} alt='' />   </p>
          <p className=" has-text-dark "><strong className="is-6">Full name: </strong>{STAFFS[id].name} </p>
          <p className=" has-text-dark"><strong className="is-6">Date of birth: </strong>{dateFormat(STAFFS[id].doB, "dd/mm/yy")}</p>
          <p className=" has-text-dark"><strong className="is-6">Start working at: </strong>{dateFormat(STAFFS[id].startDate, "dd/mm/yy")}  </p>
          <p className=" has-text-dark"><strong className="is-6">Department: </strong> {STAFFS[id].department.id} - {STAFFS[id].department.name} </p>
          <p className=" has-text-dark"><strong className="is-6">Days off left: </strong>{STAFFS[id].annualLeave}</p>
          <p className=" has-text-dark"><strong className="is-6">OT days: </strong> {STAFFS[id].overTime} </p>

        </div>
      </div>



    </div>
  )
}