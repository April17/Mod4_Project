
import React, { Fragment, Component } from 'react'
import { Header, Card, Content, Icon } from 'semantic-ui-react'
import ProgresBar from '../components/progressbar'
import ReportProgress from '../components/reportProgress'


class Task extends React.Component {


    // singleTask() {
    //     return this.props.employee.tasks.map((task) => {
    //         return <div class="ui cards">
                    
    //                 </div>
    //   })
    // }
       
    
    state = {
        progress: 0
    }
    
    handleChange = (event) => {
        this.setState({
            progress: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    
    
    render() {
        console.log(this.state.progress)
        return (
            
                
            <Fragment >
                
                <tbody>
                    <tr>
                    <td>Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</td>
                    <td>23</td>
                    <td>4</td>
                    <td><progress max="100" value="80"></progress></td>
                    <td>
                        <form className="progress-form" onSubmit={this.handleSubmit}>
                            <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
                            <input type="submit" value="Update"></input>
                        </form>
                        </td>
                    </tr>

                    
                </tbody>
            

                <tbody>
                    <tr>
                    <td>Curabitur </td>
                    <td>23</td>
                    <td>4</td>
                    <td><progress max="100" value="80"></progress></td>
                    <td>
                        <form className="progress-form" onSubmit={this.handleSubmit}>
                            <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
                            <input type="submit" value="Update"></input>
                        </form>
                        </td>
                    </tr>

                    
                </tbody>
                <tbody>
                    <tr>
                    <td>Curabitur </td>
                    <td>23</td>
                    <td>4</td>
                    <td><progress max="100" value="80"></progress></td>
                    <td>
                        <form className="progress-form" onSubmit={this.handleSubmit}>
                            <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
                            <input type="submit" value="Update"></input>
                        </form>
                        </td>
                    </tr>

                    
                </tbody>
                <tbody>
                    <tr>
                    <td>Curabitur </td>
                    <td>23</td>
                    <td>4</td>
                    <td><progress max="100" value="50"></progress></td>
                    <td>
                        <form className="progress-form" onSubmit={this.handleSubmit}>
                            <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
                            <input type="submit" value="Update"></input>
                        </form>
                        </td>
                    </tr>

                    
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th>Total 4 Tasks</th>
                        <th>  
                        </th>
                        <th>Total 34 hrs</th>
                        <th><progress max="100" value="1000"></progress></th>
                        
                    </tr>
                </tfoot> */}
                
                
            </Fragment>
                
            
        )
    }
}

export default Task