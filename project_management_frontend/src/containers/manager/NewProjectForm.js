import React, { Component } from "react";
import  '../../style/manager.css'

export default class NewProjectForm extends Component {
  
    state = {
        name: "",
        description: "",
        manager_id: this.props.managerId
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.toggle();
    };

    handleSubmit = (event) => {
        event.preventDefault()
        // fetch('http://localhost:3000/projects', {
        //     method: 'POST',
        //     headers {}
        // })
    }

render() {
    console.log(this.state)
    
  return (
    <div id="myModal" className="modal">
        <div className="modal-content">

            <div class="modal-header">
                <span className="close" onClick={this.handleClick}>&times;</span>
                <h2>Create Project</h2>
            </div>
            <div class="modal-body">
                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} name="name"  onChange={this.handleChange} placeholder="Project name.." />
                        <input type="text" value={this.state.description} name="description"  onChange={this.handleChange} placeholder="Description.." />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
   </div>
  );
 }
}