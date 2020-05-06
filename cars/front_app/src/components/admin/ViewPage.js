import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CardCar from '../customer/CardCar'
import './ViewPage.css'

class ViewPage extends Component {

    render(){ 
        
        return ( 
            <section class="admin1">
                <div class="container admin2">
                    <CardCar/>
                </div>
            </section>
                
           
            
         );
    }
}
 
export default withRouter(ViewPage);