import React from 'react'

function Searchbar(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee">Employee Name:</label>
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
                <datalist id="employees">
                    {props.employees.map(person => (
                        <option value={person.name.first || person.name.last} key={person} />
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default Searchbar