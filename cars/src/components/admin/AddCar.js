import React, { Component } from 'react'
import './AddCar.css'

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    

    render() { 

        
        const listCaracteristique = [
            {
                label : "Marque",
                id: "marque",
                placeholder : "Marque"
            },
            {
                label : "Modèle",
                id: "modele",
                placeholder : "Modèle"
            },
            {
                label : "Carburant",
                id: "carburant",
                placeholder : "Carburant"
            },
            {
                label : "Classe d'émission",
                id: "ClasseEmission",
                placeholder : "Classe d'émission"
            },
            {
                label : "Carrosserie",
                id: "carrosserie",
                placeholder : "Carrosserie"
            },
            {
                label : "Portes",
                id: "portes",
                placeholder : "Portes"
            },
            {
                label : "Transmission",
                id: "transmission",
                placeholder : "Transmission"
            },
            {
                label : "Couleur",
                id: "couleur",
                placeholder : "Couleur"
            },
            {
                label : "Intérieur",
                id: "interieur",
                placeholder : "Intérieur"
            },
            {
                label : "Année de fabrication",
                id: "AnneeDeFabrication",
                placeholder : "Année de fabrication"
            },
            {
                label : "CO2",
                id: "co2",
                placeholder : "CO2"
            },
            {
                label : "Kilométrage",
                id: "kilometrage",
                placeholder : "Kilométrage"
            },
            {
                label : "Nombre de places",
                id: "NombreDePlaces",
                placeholder : "Nombre de places"
            },
            {
                label : "Cylindrée",
                id: "cylindree",
                placeholder : "Cylindrée"
            },
            {
                label : "L'url du relevé de Car-Pass",
                id: "UrlCarPass",
                placeholder : "L'url du relevé de Car-Pass"
            }
        ]

        const listCheckBox = [{option : "4x4" }, {option : "ABS" }, {option : "Phares directionnels" }, {option : "Régulateur de distance" },
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
                <div class="container sectionAddCar2">

                    <div class="container-fluid">
                        <h2 class="py-3">Photo</h2>
                       
                    </div>
                    <div class="container-fluid">
                        <h2 class="py-3">Caractéristique</h2>
                        <div class="row">
                            {listCaracteristique.map((them)=>
                            <ul>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">{them.label}</label>
                                    <input type="text" class="form-control" id={them.id} placeholder={them.placeholder}/>
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
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label class="form-check-label" for="defaultCheck1">
                                        {them.option}
                                    </label>
                                </div>
                            </ul>)}
                        </div>
                    </div>
                    <div class="container-fluid">
                        <h2 class="py-3">Description</h2>
                       
                    </div>
                    <div class="container-fluid">
                        <h2 class="py-3">Prix</h2>
                       
                    </div>
 
                </div>
                
            </div>
         );
    }
}
 
export default AddCar;