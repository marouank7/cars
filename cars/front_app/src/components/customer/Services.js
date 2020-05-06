import React, { Component } from 'react'
import './Services.css'
import Clefs from '../../img/Clefs.jpg'
import dep from '../../img/dep.jpg'



class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="container-fluid p-5 container1">
                <h2 class="text-center titreServices" id="services">Services</h2>
                <hr style={{width:"40px", height:"2px" ,backgroundColor :"#e0d3be"}}/>
                <div class="row text-center">
                    <div class="col-md-6">
                        <img src={Clefs} style={{width : "150px"}} ></img>
                        <h4 style={{color:"white"}}>Vente</h4>
                        <p style={{color:"white"}}>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    </div>
                    <div class="col-md-6">
                        <img src={dep} style={{width : "150px", height : "150px"}}></img>
                        <h4 style={{color:"white"}}>Dépannage</h4>
                        <p style={{color:"white"}}>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                    </div>
                </div>                  
            </section>
         );
    }
}
 
export default Services;