import React from 'react'
import { Image, List, Header } from 'semantic-ui-react'


class CooworkerList extends React.Component {




    render() {
        // if (!this.props.manager.name ) {
        //     return "loading"
        // }
        // console.log(this.props.manager);
        // debugger
        return (
            <div className="container-cooworker">
                Coworkers:
                <div className="cooworkers-info"> 
                    <img src="/images/avatar/helen.jpg"></img>
                    <p>Name</p>
                </div>
                <div className="cooworkers-info"> 
                    <img src="/images/avatar/helen.jpg"></img>
                    <p>Name</p>
                </div>

            </div>
        )
    }
}

export default CooworkerList