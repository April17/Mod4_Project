import React from 'react'
import Task from '../containers/task';

class TaskList extends React.Component {

    mapOverTasks = () => {
        return this.props.data.map((task) => {
            return <Task task={task}/>
        })
    }
    
    render() {
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
                        <th>Update Progress</th>
                        </tr>
                    </thead>
                        {this.mapOverTasks()}
                </table>
            </div>
        )
    }
}

export default TaskList