import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AddCar from './AddCar'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


        
        render() { 
            console.log("dataUpdate", )
            return ( 
                <AddCar tritrePage2="MODIFIER VOITURE"/>
            );
        }
    }
 
export default withRouter(Update);