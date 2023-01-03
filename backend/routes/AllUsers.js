import React, { useState, useEffect } from 'react';
import firebase from 'firebase-admin';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get a list of all users from the database
        const usersSnapshot = await firebase.database().ref('users').once('value');
        const users = usersSnapshot.val();

        // Convert the users object to an array
        const usersArray = Object.keys(users).map(key => ({
          uid: key,
          ...users[key]
        }));

        setUsers(usersArray);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const handleDisable = (uid) => {
    firebase.database().ref(`users/${uid}`).update({
      status: "disabled"
    }, function(error) {
      if (error) {
        setError(error.message);
      } else {
        setSuccess(`User ${uid} has been disabled.`);
      }
    });
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            {user.name}
            <button onClick={() => handleDisable(user.uid)}>Disable</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;