import './staffListASM2Component.css';
import { STAFFS, DEPARTMENTS, ROLE } from "../../data/staffs";
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getStaffs } from '../../redux/thunk/staffs/getStaffs';

export default function StaffListComponent() {
    useEffect(() => {
        dispatch(getStaffs())
    }, [])

    const dispatch = useDispatch()
    const staffs = useSelector(state => state.staff.staffListInfo)
    const [search, setSearch] = useState("")
    console.log("staffs: ", staffs)
    return (
        <>
            <div className="title ">

                <p className="ml-6 mr-6 mt-3"><strong className="is-size-5 has-text-info"> List Emloyees</strong> </p>
                <div className="field  has-addons has-addons-centered  " onChange={(e) => setSearch(e.target.value)}>
                    <div className="control">
                        <input className="input" type="text" placeholder="Search " />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                    <div className="button is-primary ml-3">Add</div>

                </div>
            </div>
            <div className="columns list ml-6 mr-6 mt-3 is-multiline is-centered has-text-centered  ">
                {
                    staffs ? staffs.filter((item) => {
                        return search === "" ? item : (item.name.toLowerCase().includes(search) || item.name.includes(search))
                    }).map((s) => (
                        <div className="column is-2 " key={s._id}>
                            <Link to={`detail/${s._id}`}>
                                <div className="card-image" id='card_image_list'>
                                    <figure className="image is-128x128">
                                        <img src={s.image} alt='' />
                                    </figure>
                                </div>
                                {s.name}
                            </Link>

                        </div>
                    )) : <></>
                }

            </div>
        </>

    )

}