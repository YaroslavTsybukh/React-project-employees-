import './employees-list-item.css';
import {Component} from "react";
import classNames from "classnames";

class EmployeesListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase : false,
            like : false
        }
    }

    onChangeIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onChangeLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render(){
        const {name , salary , onDelete} = this.props
        const {increase , like} = this.state

        const className = classNames({
            "list-group-item d-flex justify-content-between" : true,
            "increase": increase,
            "like" : like
        })
        return (
            <li className={className} >
                <span className="list-group-item-label" onClick={this.onChangeLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onChangeIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;