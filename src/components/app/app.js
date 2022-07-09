import {Component} from "react"
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name : "John Smith" , salary : 800 , increase : true , id : 1},
                {name : "John Van" , salary : 900 , increase : false , id : 2},
                {name : "John Lim" , salary : 1000 , increase : false , id : 3},
            ]
        }
    }

    onDeleteEmployee = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter( item => item.id !== id)
            }
        })
    }
    onAddEmployee = (name , salary) => {
        const html = nextId()
        const newEmployee = {
            name,
            salary,
            increase:false,
            id:html
        }
        this.setState(({data}) => {
            const newArr = [...data , newEmployee]
            return {
                data: newArr
            }
        })
    }
    render(){
        const {data} = this.state
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={data} onDelete={this.onDeleteEmployee}/>
                <EmployeesAddForm addEmployee={this.onAddEmployee}/>
            </div>
        );
    }
}

export default App;
