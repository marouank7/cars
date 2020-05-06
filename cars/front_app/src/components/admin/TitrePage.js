import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class TitrePage extends Component {
   
    render() { 


        return ( 
            <div class="container-fluid py-5 text-center">
                <div>
                    <h1 class="titrePage">SANDERS CARS</h1>
                </div>
                
            </div>
         );
    }
}
 
export default withRouter(TitrePage);