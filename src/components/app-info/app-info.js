import "./app-info.css";

const AppInfo = ({data}) => {

    const allEmployees = data.length
    const riseEmployees = data.filter(employee => employee.rise).length
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {riseEmployees}</h2>
        </div>
    )
}

export default AppInfo;