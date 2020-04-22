import React, { Component } from 'react'
import './ModelesPage.css'
import CardCar from '../CardCar'
import Mercedes from '../../../img/Mercedes.jpeg'
import Porsche from '../../../img/Porsche.jpeg'

class ModelesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container" class="my-5 text-center" id="containerModelePage" >
                <div class="row">
                    <div class="col">
                        <div class="info-header">
                            <h2 class="pb-3">Nos modèles</h2>
                            <p class="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga quasi quaerat iusto consequuntur laboriosam!
                            </p>
                        </div>
                    </div>
                </div>
                        
            </div>
         );
    }
}
 
export default ModelesPage;