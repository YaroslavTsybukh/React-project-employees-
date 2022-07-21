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
                {name : "John Smith" , salary : 800 , increase : false , rise : false, id : 1},
                {name : "John Van" , salary : 900 , increase : false , rise : false, id : 2},
                {name : "John Lim" , salary : 1200 , increase : false , rise : false, id : 3},
            ],
            term : "",
            filter : "all"
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

    onToggleProp = (id , prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item , [prop]:!item[prop]}
                }
                return item
            })
        }))
    }

    searchEmployees = (term , data) => {
        return data.filter(item => {
            return item.name.indexOf(term) !== -1
        })
    }

    onUpdateTerm = (string) => {
        this.setState(({term:string}))
    }

    onSelectFilter = (e) => {
        const filter = e.target.getAttribute("data-filter")
        this.setState({filter})
    }

    selectFilter = (filter , data) => {
        switch(filter){
            case "rise" : return data.filter(item => item.rise)
            case "over1000" : return data.filter(item => item.salary > 1000)
            default : return data
        }
    }

    render(){
        const {data , term , filter} = this.state
        const visible = this.selectFilter(filter , this.searchEmployees(term , data))

        return (
            <div className="app">
                <AppInfo data={data}/>

                <div className="search-panel">
                    <SearchPanel updateTerm={this.onUpdateTerm}/>
                    <AppFilter onSelectfilter={this.onSelectFilter} filter={filter}/>
                </div>

                <EmployeesList data={visible} onDelete={this.onDeleteEmployee} onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm addEmployee={this.onAddEmployee}/>
            </div>
        );
    }
}

export default App;
