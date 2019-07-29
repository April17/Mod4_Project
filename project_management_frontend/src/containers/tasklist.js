import React from 'react'
import { Menu, Item, Input, Card, Group } from 'semantic-ui-react'
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
                        
                            <Task />
                        
                        
                    
                    
                
                    </table>
                </div>
                
            
        )
    }
}

export default TaskList