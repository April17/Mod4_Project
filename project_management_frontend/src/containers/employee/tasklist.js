import React from 'react'
import EmployeeTask from '../../components/EmployeeTask';

class TaskList extends React.Component {


    mapOverTasks = () => {
        return this.props.data.filtered_tasks.map((task) => {
            return <EmployeeTask updateTask={this.props.updateTask} key={task.id} task={task}/>
        })

    }

    render() {
      return (
        <div className="tasklist-div">
          <h3>Tasks </h3>
          <table className="ui single fixed striped table">
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
