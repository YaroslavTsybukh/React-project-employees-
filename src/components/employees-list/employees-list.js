import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data , onDelete}) => {
    const elements = data.map( item => {
        const {id , ...itemValue} = item
        return (
            <EmployeesListItem key={id} {...itemValue} onDelete={() => onDelete(id)}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;