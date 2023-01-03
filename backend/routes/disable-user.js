const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

router.post('/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await admin.auth().getUser(uid);
    await admin.auth().updateUser(user.uid, { disabled: true });
    res.send(`User ${uid} was disabled successfully.`);
  } catch (error) {
    res.status(500).send(`Error disabling user ${uid}: ${error}`);
  }
});

module.exports = router;
