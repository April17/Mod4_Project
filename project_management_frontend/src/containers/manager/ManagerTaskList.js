import React from 'react'
import ManagerTask from '../../components/ManagerTask';

class ManagerTaskList extends React.Component {

    
    // checkIfManager = (username) => {
    //     return username.substring(0, 3) === "mag" ? true : false
    // }

    mapOverTasks = () => {
        return this.props.data.tasks.map((task) => {
            return <ManagerTask task={task}/>
        })
        
    }
    
    render() {
        // this.checkIfManager(this.props.username)
        console.log(this.props);

        return (
            <div class="tasklist-div">
                <h3>Tasks </h3>
                <table class="ui single fixed striped table">
                    <thead>
                        <tr>
                        <th>Task Name</th>
                        <th>Total Working Hours</th>
                        <th>Total Work Done</th>
                        <th>Task Progress</th>
                        
                        </tr>
                    </thead>
                        {this.mapOverTasks()}
                </table>
            </div>
        )
    }
}

export default ManagerTaskList