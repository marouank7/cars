import React, { Component } from 'react'
import './AddCar.css'

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    

    render() { 

        const listCheckBox = ["4x4", "ABS", "Phares directionnels", "Régulateur de distance","Airbags", "Air conditionné", 
        "Alarme " , "Intérieur cuir " , "Bluetooth " , "Ordinateur de bord " , "Verrouillage central " , "Air conditionné automatique ",
        "Cruise Control " , "Avertisseur d'angle mort ", "Hayon arrière électrique " , "Rétroviseurs électriques " , "Sièges électriques",
        "Vitres électriques " , "Assistance au freinage d'urgence ","Isofix " , "Verrouillage centralisé sans clé " , "Verrouillage centralisé sans clé ",
        "Jantes en alliage léger " , "Peinture métallisée ","Phares antibrouillard " , "Système de navigation " , "Toit ouvrant / panoramique " ,
        "Toit panoramique " , "Pilote automatique de stationnement ","Caméra " , "Capteur de stationnement " , "Radio " , "Porte coulissante " , 
        "Pack sport ","Sièges sport " , "Commande vocale " , "Interruption de démarrage " , "Système Start/Stop " , "Sièges massants ",
        "Sièges ventilés" , "Sièges chauffants " , "Volant chauffant" , "Système Start/Stop " , "Anti démarrage", "Attache-remorque" , "USB " ,
         "Détection des panneaux routiers" , "Système de détection de la somnolence" , "Rétroviseurs extérieur chauffants", "Phares au xénon"]
    
        return ( 
            <div class="container-fluid py-5 sectionAddCar">
                <div class="container sectionAddCar2">
                    <div>
                        <h2 class="py-3">Caractéristique</h2>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Modèle</label>
                            <input type="text" class="form-control" id="modele" placeholder="Modèle"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Carburant</label>
                            <input type="text" class="form-control" id="carburant" placeholder="Carburant"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Classe d'émission</label>
                            <input type="text" class="form-control" id="ClasseEmission" placeholder="Classe d'émission"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Carrosserie</label>
                            <input type="text" class="form-control" id="carrosserie" placeholder="Carrosserie"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Portes</label>
                            <input type="text" class="form-control" id="portes" placeholder="Portes"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Transmission</label>
                            <input type="text" class="form-control" id="transmission" placeholder="Transmission"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Couleur</label>
                            <input type="text" class="form-control" id="couleur" placeholder="Couleur"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Intérieur</label>
                            <input type="text" class="form-control" id="interieur" placeholder="Intérieur"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Année de fabrication</label>
                            <input type="text" class="form-control" id="annee" placeholder=">Année de fabrication"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">CO2</label>
                            <input type="text" class="form-control" id="co2" placeholder="CO2"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Kilométrage</label>
                            <input type="text" class="form-control" id="kilometrage" placeholder="Kilométrage"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Nombre de places</label>
                            <input type="text" class="form-control" id="places" placeholder="Nombre de places"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Puissance</label>
                            <input type="text" class="form-control" id="puissance" placeholder="Puissance"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Cylindrée</label>
                            <input type="text" class="form-control" id="cylindre" placeholder="Cylindrée"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">L'url du relevé de Car-Pass</label>
                            <input type="text" class="form-control" id="UrlCarPass" placeholder="L'url du relevé de Car-Pass"/>
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
                                        {them}
                                    </label>
                                </div>
                            </ul>)}
                        </div>
                    </div>
                    
                    

                    

                </div>
                
            </div>
         );
    }
}
 
export default AddCar;