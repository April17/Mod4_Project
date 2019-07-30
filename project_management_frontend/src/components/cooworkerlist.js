import React from 'react'


class CooworkerList extends React.Component {

    coworkersMap = () => {
        return this.props.coworkers.map((coworker) => {
            return (
                <div className="cooworkers-info"> 
                <img src="/images/avatar/helen.jpg"></img>
                <p>{coworker.name}</p>
            </div>
            )
        })
    }


    render() {
        return (
            <div className="container-cooworker">
                Coworkers:
                {this.coworkersMap()}
            </div>
        )
    }
}

export default CooworkerList