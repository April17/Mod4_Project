import React from 'react'
import { Menu, Item, Input } from 'semantic-ui-react'
import Navbar from '../components/navbar';
import Tasklist from '../containers/tasklist';

class Project extends React.Component {

    render() {

        return (
            <div className="project-div">
                <div className="project-name-div">
                    <h3>Project Name:</h3>
                    <h5>Progress Report</h5>
                    <progress max="100" value="80"></progress>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                </div>
                <Tasklist />
                
            </div>
        )
    }
}

export default Project