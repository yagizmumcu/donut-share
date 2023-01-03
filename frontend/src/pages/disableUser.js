import React, { useState } from 'react';
import firebase from 'firebase-admin';

function DisableUser() {
  const [uid, setUid] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    setUid(event.target.value);
  }

  const handleDisable = () => {
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
      <label htmlFor="uid">Enter the UID of the user to disable:</label>
      <input type="text" id="uid" value={uid} onChange={handleChange} />
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button onClick={handleDisable}>Disable User</button>
    </div>
  );
}

export default DisableUser;