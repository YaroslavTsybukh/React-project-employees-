import './search-panel.css';
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state={
            search: ""
        }
    }

    onEnterEmployee = (e) => {
        this.setState({
            search:e.target.value
        })
        this.props.updateTerm(e.target.value)
    }
    render(){
        const {search} = this.state
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={search}
                   onChange={this.onEnterEmployee}/>
        )
    }
}

export default SearchPanel;