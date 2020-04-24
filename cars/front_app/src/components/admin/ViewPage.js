import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CardCar from '../customer/CardCar'
import './ViewPage.css'

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentDidMount(){
    //     const {id} = this.props.location.state
    //     console.log("about555", id)
    // }
    
    render(){ 

        // const {id, marque, modele, prix} = this.props.location.state
        // console.log("about666", this.props.location.state)
        
        return ( 
            <section class="admin1">
                <h1>Salut</h1>
                <div class="container admin2">
                    <CardCar/>
                </div>
            </section>
                
           
            
         );
    }
}
 
export default withRouter(ViewPage);