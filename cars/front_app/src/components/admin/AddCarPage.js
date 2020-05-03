import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import AddCar from './AddCar'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        console.log("this.props.editM",this.props.editM)

        // console.log('thisId',this.props.location.state.id)
        return ( 
             <AddCar tritrePage2="AJOUTER UNE VOITURE"/>
         );
    }
}
 
export default withRouter(Update);