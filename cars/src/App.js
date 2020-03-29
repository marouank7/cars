import React from 'react';
import CardCar from './components/CardCar'
import ModelesPage from './components/ModelesPage'
import Mercedes from './img/Mercedes.jpeg'
import Porsche from './img/Porsche.jpeg'

function App() {
  return (
    <div>
      <ModelesPage/>
      <CardCar model="Mercedes" kilometrage="152000 Km" annee="2016" etiquette="Euro 1" co2 = "99 g/km" garantie="6 mois" photo={Mercedes}/>
      <CardCar photo={Porsche}/>
      
    </div>
  );
}

export default App;
