import React from 'react'
import Task from '../containers/task';

class TaskList extends React.Component {
    render() {
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
                        <Task data={this.props.data}/>
                </table>
            </div>
        )
    }
}

export default TaskList