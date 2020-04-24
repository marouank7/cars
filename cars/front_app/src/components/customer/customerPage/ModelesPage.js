import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './ModelesPage.css'
import axios from 'axios'
import CardCar from '../CardCar'
import Mercedes from '../../../img/Mercedes.jpeg'
import Porsche from '../../../img/Porsche.jpeg'

class ModelesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listCars : []
         }
    }

    componentDidMount(){
        this.getDataAddCar()
    }

    getDataAddCar = () => {
        axios.get('http://localhost:3005/api/getcar')
        .then((response) => {
            // handle success
            console.log("response",response.data)
            this.setState({ listCars : response.data})
            // this.setState({ movies : response.data.movies})
            console.log("iciiii",response.data)
            console.log('this.state.listCars555555', this.state.listCars)
            
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    };

    render() { 
        
        
        return ( 
            <div class="container" class="py-5 text-center" id="containerModelePage" >
                <div class="row">
                    <div class="col">
                        <div class="info-header">
                            <h2>Nos modèles</h2>
                            <hr class="mb-5" style={{width:"40px", height:"2px" ,backgroundColor :"#340809"}}/>
                            <p class="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga quasi quaerat iusto consequuntur laboriosam!
                            </p>
                            
                            {/* {this.state.listCars.map((propsCar, index) => 

                                <CardCar propsCar={propsCar.marque}/>

                            )} */}

                        </div>
                    </div>
                </div>
                        
            </div>
         );
    }
}
 
export default withRouter(ModelesPage);