import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios'
import './AddCar.css'

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DescriptionText : "",
            marque : "",
            modele : "",
            carburant : "",
            classeEmission : "",
            carrosserie : "",
            portes : "",
            transmission : "",
            couleur : "",
            interieur : "",
            AnneeDeFabrication : "",
            co2 : "",
            NombreDePlaces : "",
            cylindree : "",
            UrlCarPass : "",
            prix : "",
            kilometrage : "",     
         }
         
    }


    updateField = (event) => {
        this.setState({[event.target.id] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
         return (this.props.location.state.id === false ? this.postCar() : this.UpdateCar(this.props.location.state.id));
    }

    
    

    componentDidMount(){
        this.getCarToBeUpdate(this.props.location.state.id)
    }

    getCarToBeUpdate = (id) => {
        axios.get(`http://localhost:3005/api/getcar/${id}`)
        .then((response) => {
            // handle success
            // console.log("response333",response)
            console.log("iciiii444",response.data[0])
            // console.log("stateActuel",this.state)
            this.setState(response.data[0]);
            console.log("stateUpdate", this.state)
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
        axios.put(`http://localhost:3005/api/getcar/${id}`, this.state)
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
        axios.post('http://localhost:3005/api/getcar', this.state)
          .then(function (response) {
            console.log("response post",response);
          })
          .then(() => this.props.history.push('/adminpage'))
    }

    fileSelected = (event) => {
        console.log(event)
    }

    

    render() { 

        console.log("thisPropspspspssp",this.state)
    
        const {tritrePage2} = this.props
        
        const listCaracteristique = [
            {
                label : "Marque",
                id: "marque",
                placeholder : this.state.marque
            },
            {
                label : "Modèle",
                id: "modele",
                placeholder : this.state.modele
            },
            {
                label : "Carburant",
                id: "carburant",
                placeholder : this.state.carburant
            },
            {
                label : "Classe d'émission",
                id: "classeEmission",
                placeholder : this.state.classeEmission
            },
            {
                label : "Carrosserie",
                id: "carrosserie",
                placeholder : this.state.carrosserie
            },
            {
                label : "Portes",
                id: "portes",
                placeholder : this.state.portes
            },
            {
                label : "Transmission",
                id: "transmission",
                placeholder : this.state.transmission
            },
            {
                label : "Couleur",
                id: "couleur",
                placeholder : this.state.couleur
            },
            {
                label : "Intérieur",
                id: "interieur",
                placeholder : this.state.interieur
            },
            {
                label : "Année de fabrication",
                id: "AnneeDeFabrication",
                placeholder : this.state.AnneeDeFabrication
            },
            {
                label : "CO2",
                id: "co2",
                placeholder : this.state.co2
            },
            {
                label : "Kilométrage",
                id: "kilometrage",
                placeholder : this.state.kilometrage
            },
            {
                label : "Nombre de places",
                id: "NombreDePlaces",
                placeholder : this.state.NombreDePlaces
            },
            {
                label : "Cylindrée",
                id: "cylindree",
                placeholder : this.state.cylindree
            },
            {
                label : "L'url du relevé de Car-Pass",
                id: "UrlCarPass",
                placeholder : this.state.UrlCarPass
            }
        ]

        const listCheckBox = [{option : "4x4", id : 1 }, {option : "ABS", id : 2 }, {option : "Phares directionnels", id : 3  }, {option : "Régulateur de distance" },
         {option : "Airbags" }, {option : "Air conditionné" }, {option : "Alarme" }, {option : "Intérieur cuir" },
         {option : "Bluetooth" }, {option : "Ordinateur de bord" }, {option : " Verrouillage central" }, {option : "Air conditionné automatique" },
         {option : "Cruise Control" }, {option : "Avertisseur d'angle mort" }, {option : "Hayon arrière électrique" }, {option : "Rétroviseurs électriques" },
         {option : "Sièges électriques" }, {option : "Vitres électriques" }, {option : "Assistance au freinage d'urgence" }, {option : "Isofix" },
         {option : "Verrouillage centralisé sans clé" }, {option : "Verrouillage centralisé sans clé" }, {option : "Jantes en alliage léger" }, {option : "Peinture métallisée" },
         {option : "Phares antibrouillard" }, {option : "Système de navigation" }, {option : "Toit ouvrant / panoramique" }, {option : "Toit panoramique" },
         {option : "Pilote automatique de stationnement" }, {option : "Caméra" }, {option : "Capteur de stationnement" }, {option : "Radio" },
         {option : "Porte coulissante" }, {option : "Pack sport" }, {option : "Sièges sport" }, {option : "Commande vocale" },
         {option : "Interruption de démarrage" }, {option : "Système Start/Stop" }, {option : "Sièges massants" }, {option : "Sièges ventilés" },
         {option : "Sièges chauffants" }, {option : "Sièges chauffants" }, {option : "Volant chauffant" }, {option : "Système Start/Stop" },
         {option : "Anti démarrage" }, {option : "Attache-remorque" }, {option : "USB" }, {option : "Détection des panneaux routiers" },
         {option : "Système de détection de la somnolence" }, {option : "Rétroviseurs extérieur chauffants" }, {option : "Phares au xénon" }
        ]

        return ( 
            <div class="container-fluid py-5 sectionAddCar">
                <div class="container-fluid py-5 text-center">
                    <div>
                        {/* <i class="fas fa-car"></i> */}
                        <h1 class="titrePage">SANDERS CARS</h1>
                        {/* <i class="fas fa-car"></i> */}
                    </div>
                    
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div class="container sectionAddCar2">
                        <div class="container-fluid py-5 text-center">
                            <div>
                                {/* <i class="fas fa-car"></i> */}
                                <p class="titrePage2">{tritrePage2}</p>
                                {/* <i class="fas fa-car"></i> */}
                            </div>
                        </div>
                        <div class="container-fluid">
                            <h2 class="py-3">Photo</h2>
                            <div>
                                <input type="file" onChange={this.fileSelected}></input>
                            </div>
                            
                        </div>
                        <div class="container-fluid">
                            <h2 class="py-3">Description</h2>
                            <div>
                                <textarea class="form-control" name="message" id="DescriptionText" rows="4" required="required"  placeholder={this.state.DescriptionText} onChange={this.updateField}></textarea>
                            </div>
                            
                        </div>
                        <div class="container-fluid">
                            <h2 class="py-3">Caractéristique</h2>
                            <div class="row">
                                {listCaracteristique.map((them)=>
                                <ul>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">{them.label}</label>
                                        <input type="text" class="form-control" id={them.id} placeholder={them.placeholder} onChange={this.updateField}/>
                                    </div>
                                </ul>)}
                            </div>
                        </div>
                        
                        <div class="container-fluid">
                            <h2 class="py-3">Options</h2>
                            <div class="row">
                                {listCheckBox.map((them)=>
                                <ul>
                                    <div class="form-check" style={{width:"300px"}}>
                                        <input class="form-check-input" type="checkbox" value="true" id={them.id} onChange={this.updateField}/>
                                        <label class="form-check-label" for="defaultCheck1">
                                            {them.option}
                                        </label>
                                    </div>
                                </ul>)}
                            </div>
                        </div>
                    
                        <div class="container-fluid">
                            <h2 class="py-3">Prix</h2>
                            <input type="text" class="form-control" id="prix" placeholder={this.state.prix} onChange={this.updateField}/>
                        </div>
                        <div class="container text-center py-5">
                            <button to="adminpage" type="submit" class="btn btn-lg save text-light"><i class="far fa-save"></i> Save</button>
                            {/* <button to="adminpage" class="btn btn-lg save text-light ml-2" onClick={this.UpdateCars(this.props.location.state.id)}><i class="far fa-save"></i> Update</button> */}
                            {/* <Link to="/adminpage" type="submit" class="btn btn-lg save text-light"><i class="far fa-save"></i> Save</Link> */}
                        </div>
                        
    
                    </div>
                </form>
                
            </div>
         );
    }
}
 
export default withRouter(AddCar);