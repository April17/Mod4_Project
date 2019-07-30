import React, { Fragment, Component } from 'react'


class Task extends React.Component {
    singleTask() {
        return this.props.data.map((task) => {
            return(
                <tbody>
                    <tr>
                        <td>{task.name}</td>
                        <td>{task.total_working_time}</td>
                        <td>{task.total_working_done}</td>
                        <td><progress max="100" value="80"></progress></td>
                        <td>
                            <form className="progress-form" onSubmit={this.handleSubmit}>
                                <input type="number" name="progress" value={this.state.progress} onChange={this.handleChange}></input>
                                <input type="submit" value="Update"></input>
                            </form>
                        </td>
                    </tr>
                </tbody>
            )
      })
    }
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
        return (
            <Fragment >
                {this.singleTask()}
            </Fragment>
        )
    }
}

export default Task