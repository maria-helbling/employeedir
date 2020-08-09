import React, {Component} from 'react';
import API from '../utils/API';
import Searchbar from '../components/Searchbar'
import EmployeeTable from '../components/EmployeeTable'
import Nav from '../components/Nav'

class OnlyPage extends Component {
    state ={
        result: [],
        search: '',
        sort:1
    }

    componentDidMount(){
        this.loadEmployees()
    }

    sortEmployees = (emp1, emp2) => {
        let last1 = emp1.name.last
        let last2 = emp2.name.last
        let answ = 0
        if (last1>last2) {
            answ = this.state.sort
        } else if (last1<last2) {
            answ = this.state.sort *-1
        }
        return answ
    }

    changeSort = () => {
        if (this.state.sort =1) {

            this.setState({sort: -1})
        } else {
            this.setState({sort: 1})
        }
    }

    loadEmployees = async () =>{
        const empList = await API.getEmployees()
        let list = empList.data.results.sort(this.sortEmployees)
        this.setState({result: list})
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
    }

    render(){
        return(
            <>
                <Nav />
                    <div className="container">
                        <Searchbar />
                        <EmployeeTable employees={this.state.result} changeSort={this.changeSort} sortEmployees={this.sortEmployees} sort={this.state.sort}/>
                    </div>
            </>
        )
    }
}

export default OnlyPage;