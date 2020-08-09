import React from 'react'

function Searchbar(props) {
    return (
        <div className="row">

        <form className="search">
            <div className="form-group">
                <label htmlFor="employee" className="col-form-lable">Employee Name:</label>
                <input
                    //value={props.search}
                    //onChange={props.handleInputChange}
                    name="employee"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Who are you looking for?"
                    id="employee"
                />
                {/* <datalist id="employees">
                    {props.employees.map(person => (
                        <option value={person.name.first || person.name.last} key={person.id} />
                    ))}
                </datalist> */}
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
        </div>
    )
}

export default Searchbar