import React, { Component } from 'react'
import intBMW from '../../img/intBMW.webp'
import './NotreEquipe.css'


class NotreEquipe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="container-fluid p-5 container1">
                
                <div class="container container2">
                    <h2 class="text-center pt-5">L'ÉQUIPE</h2>
                    <hr style={{width:"40px", height:"2px" ,backgroundColor :"#340809"}}/>
                    <p class="text-center pt-5 pb-5">Nous des jzidjozeijfoiezhfohzefohezohfoiezhfioehfheozifhoiezfoezoifhoiehfoiefheozihfoiehf</p>
                </div>

            </section>
         );
    }
}
 
export default NotreEquipe;