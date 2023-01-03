const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.get('/', function(req, res) {
  // Get a list of all users from the database
  firebase.database().ref('users').once('value', snapshot => {
    const users = snapshot.val();

    // Convert the users object to an array
    const usersArray = Object.keys(users).map(key => ({
      uid: key,
      ...users[key]
    }));

    res.send({ users: usersArray });
  }, function(error) {
    res.send({ error: error.message });
  });
});

module.exports = router;
