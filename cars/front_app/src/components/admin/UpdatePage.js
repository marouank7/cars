import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AddCar from './AddCar'

class Update extends Component {
  
        render() { 
            console.log("dataUpdate", )
            return ( 
                <AddCar tritrePage2="MODIFIER VOITURE"/>
            );
        }
    }
 
export default withRouter(Update);