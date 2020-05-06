import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import OptionsCar from './OptionsCar'
import TitrePage from './TitrePage'
import UploadPic from './UploadPic'
import InputCar from './InputCar'
import DescriptiveText from './DescriptiveText'
import Price from './Price'
import axios from 'axios'
import './AddCar.css'

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // selectedFiled : null,
            descriptiveText : "",
            brand : "",
            model : "",
            fuel : "",
            EmissionClass : "",
            bodyCar : "",
            doors : "",
            gearbox : "",
            color : "",
            interior : "",
            year : "",
            co2 : "",
            carSeat : "",
            power : "",
            UrlCarPass : "",
            price : "",
            kilometer : "",     
         }
         
    }

    updateField = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.fileSelectedHandler()
        return (this.props.location.state.id === false ? this.postCar() : this.UpdateCar(this.props.location.state.id));
    }

    componentDidMount(){
        this.getCarToBeUpdate(this.props.location.state.id)
    }

    getCarToBeUpdate = (id) => {
        axios.get(`http://localhost:3005/api/cars/${id}`)
        .then((response) => {
            // handle success
            this.setState(response.data[0]);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .finally(() => {
            // always executed
        });
    };
    
    UpdateCar = (id) =>{
        axios.put(`http://localhost:3005/api/cars/${id}`, this.state)
        .then((res) => {
            console.log(res.data)
            console.log("axiosPut", res.data)
        })
        .then(() => this.props.history.push('/adminpage'))
        .catch((err) => {
            console.log(err)
        })
    }

    postCar = () => {
        axios.post('http://localhost:3005/api/cars', this.state)
          .then(function (response) {
            console.log("response post",response);
          })
          .then(() => this.props.history.push('/adminpage'))
    }

    render() {

        const {tritrePage2} = this.props
        
        const listCaracteristique = [
            {
                label : "Marque",
                name: "marque",
                placeholder : this.state.brand
            },
            {
                label : "Modèle",
                name: "modele",
                placeholder : this.state.model
            },
            {
                label : "Carburant",
                name: "carburant",
                placeholder : this.state.fuel
            },
            {
                label : "Classe d'émission",
                name: "classeEmission",
                placeholder : this.state.EmissionClass
            },
            {
                label : "Carrosserie",
                name: "carrosserie",
                placeholder : this.state.bodyCar
            },
            {
                label : "Portes",
                name: "portes",
                placeholder : this.state.doors
            },
            {
                label : "Transmission",
                name: "transmission",
                placeholder : this.state.gearbox
            },
            {
                label : "Couleur",
                name: "couleur",
                placeholder : this.state.color
            },
            {
                label : "Intérieur",
                name: "interieur",
                placeholder : this.state.interior
            },
            {
                label : "Année de fabrication",
                name: "AnneeDeFabrication",
                placeholder : this.state.year
            },
            {
                label : "CO2",
                name: "co2",
                placeholder : this.state.co2
            },
            {
                label : "Kilométrage",
                name: "kilometrage",
                placeholder : this.state.kilometer
            },
            {
                label : "Nombre de places",
                name: "NombreDePlaces",
                placeholder : this.state.carSeat
            },
            {
                label : "Cylindrée",
                name: "cylindree",
                placeholder : this.state.power
            },
            {
                label : "L'url du relevé de Car-Pass",
                name: "UrlCarPass",
                placeholder : this.state.urlCarPass
            }
        ]

        

        return ( 
            <div class="container-fluid py-5 sectionAddCar">
                <TitrePage/>
                <form onSubmit={this.handleSubmit}>
                    <div class="container sectionAddCar2">
                        <div class="container-fluid py-5 text-center">
                            <div>
                                <p class="titrePage2">{tritrePage2}</p>
                            </div>
                        </div>
                        <UploadPic/>
                        <DescriptiveText placeholder={this.state.descriptiveText} value={this.state.descriptiveText} action={this.updateField}/>
                        <div class="container-fluid">
                            <h2 class="py-3">Caractéristique</h2>
                            <div class="row">
                                {listCaracteristique.map((them)=>
                                <ul>
                                    <InputCar name={them.name} label={them.label} placeholder={them.placeholder} value={this.state[them.name]} action={this.updateField}/>
                                </ul>)}
                            </div>
                        </div>

                        <OptionsCar/>
                        <Price price={this.state.price} action={this.updateField}/>
                        <div class="container text-center py-5">
                            <button to="adminpage" type="submit" class="btn btn-lg save text-light"><i class="far fa-save"></i> Save</button>
                        </div>
                        
    
                    </div>
                </form>
                
            </div>
         );
    }
}
 
export default withRouter(AddCar);