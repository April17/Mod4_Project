import React from 'react'

class Checkbox extends React.Component {

    state = {
        checked: false
    }

    handleChange = (event) => {
        this.setState({
            id: this.state.id,
            checked: !this.state.checked
        }, this.updateForm)
        
    }

    updateForm = () => {
        if (this.state.checked) {
            this.props.addEmployee(this.props.employee.id)
        } else {
            this.props.removeEmployee(this.props.employee.id)
        }
    }


    render() {
        console.log(this.state.checked);
        return (
            <div key={this.props.employee.id} >
                <lable>{this.props.employee.name}</lable>
                <input type="checkbox" checked={this.state.checked} value={this.props.employee.id} name={this.props.employee.name}  onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Checkbox