const express = require('express');
const app = express();
const port = 3005;
const connection = require('./conf');

const bodyParser = require('body-parser');
  // Support JSON-encoded bodies
  app.use(bodyParser.json());
  // Support URL-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  next();
});



// écoute de l'url "/api/employees" avec le verbe POST
app.post('/api/getcar', (req, res) => {
console.log('je suis dans mon serveur')
  // récupération des données envoyées
  const formData = req.body;
  console.log(formData)
  // connexion à la base de données, et insertion de l'employé
  connection.query('INSERT INTO caracteristiques SET ?', formData, (err, results) => {

    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});












// app.get('/getcara', (req, res) => {

//   // connection à la base de données, et sélection des employés
//   connection.query('SELECT * from caracteristiques', (err, results) => {

//     if (err) {

//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send('Erreur lors de la récupération des employés');
//     } else {

//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results);
//     }
//   });
// });

// connection.query('SELECT * from caracteristiques ', function(error, results, fields){
//     if (error)  error;
//     console.log('test : ', results)
// });


// app.get('/', (request, response) => {
//   response.send('Bienvenue sur Express');
// });


