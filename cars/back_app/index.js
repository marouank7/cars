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

app.post('/api/cars', (req, res) => {
console.log('je suis dans mon serveur')
  const formData = req.body;
  console.log(formData)
  
  connection.query('INSERT INTO caracteristiques SET ?', formData, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/api/cars', (req, res) => {
  console.log('je suis dans mon getAddCartobe')
  connection.query('SELECT * FROM caracteristiques', (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.delete('/api/cars/:id', (req, res) => {

  const idCar = req.params.id;

  connection.query('DELETE FROM caracteristiques WHERE id = ?', [idCar], err => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/cars/:id', (req, res) => {

console.log('je suis dans serveur update')

  const idCars = req.params.id;
  const formData = req.body;

  connection.query('UPDATE caracteristiques SET ? WHERE id = ?', [formData, idCars], err => {

  if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un employé");
  } else {
      res.sendStatus(200);
  }
  });
});

app.get('/api/cars/:id', (req, res) => {

  console.log('je suis dans serveur getById')

    const idCars = req.params.id;
    console.log("idCars", idCars)

    connection.query(`SELECT * From caracteristiques WHERE id = ${idCars}`,(err, results) => {
  
    if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'un employé");
    } else {
        res.json(results);
    }
    });
  });




app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
