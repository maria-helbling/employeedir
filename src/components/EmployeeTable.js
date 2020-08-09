import React from 'react'
import SortBtn from './SortBtn'
let isOdd = true;
function EmployeeTable (props) {

    const getColor = (boolean) => {
        if (!boolean) {
            isOdd = !isOdd
            return ''
        } else {
            isOdd = !isOdd
            return 'bg-light'
        }
   }
   const sortDir = () => {

   }

    return (
            <>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2"><h4>Name <SortBtn  sortChange = {props.sortChange}/></h4></div>
                    <div className="col-3"><h4>Email</h4></div>
                    <div className="col-2"><h4>Phone</h4></div>
                    <div className="col-3"><h4>Address</h4></div>
                </div>
                {props.employees.sort().map(empl => (
                <div className={`row p-2 ${getColor(isOdd)}`} key={empl.id.value}>
                    <div key={empl.id.value} className="col-1">
                    <img src={empl.picture.thumbnail} className="align-self-center mr-3" alt={`${empl.name.first} ${empl.name.last}`}/>
                    </div>
                <div  key={empl.id.value} className="col-2">{`${empl.name.first} ${empl.name.last}`}</div>
                <div key={empl.id.value} className="col-3">{empl.email}</div>
                <div key={empl.id.value} className="col-2">{empl.phone}</div>
                <div key={empl.id.value} className="col-3">{`${empl.location.city}, ${empl.location.state}, ${empl.location.country}`}</div>
                </div>
                ))}
            </>
        )
}

export default EmployeeTable;