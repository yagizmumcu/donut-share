const express = require('express');
const app = express();
const firebase = require('firebase-admin');
const serviceAccount = require('./dnut-config.json');
const cors = require('cors');
// Initialize Firebase Admin SDK
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
});
app.use(cors());
// Set up a route to list all users
app.get('/users', (req, res) => {
  firebase.auth().listUsers()
    .then((listUsersResult) => {
      const users = listUsersResult.users;
      res.json(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// Set up a route to disable a user
app.post('/users/:uid/disable', (req, res) => {
  firebase.auth().updateUser(req.params.uid, {
    disabled: true
  })
    .then(() => {
      res.send('User disabled');
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


