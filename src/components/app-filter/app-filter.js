import "./app-filter.css";

const AppFilter = ({onSelectfilter , filter}) => {
    const buttonArr = [
        {name: "all" , text: "Все сотрудники"},
        {name: "rise" , text: "На повышение"},
        {name: "over1000" , text: "З/П больше 1000$"}
    ]

    const buttons = buttonArr.map(({name , text} , index) => {
        const active = filter === name
        const clazz = active ? "btn-light" : "btn-outline-light"
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    data-filter={name}
                    onClick={onSelectfilter}
                    key={index}>
                    {text}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;