// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// // The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  admin.database().ref('/posts').once("value", function (data) {
    console.log(data)
    res.send(data)
  });

});
app.get('/:id', (req, res) => {
  const id = req.params.id
  admin.database().ref(`/posts/${id}`).once("value", function (data) {
    console.log(data)
    res.send(data)
  });
});
app.post('/', (req, res) => {
  const data = req.body;
  admin.database().ref('/posts').push(data);
  res.send(data)
});
app.put('/:id', (req, res) => {

  res.send(Widgets.update(req.params.id, req.body))
});
app.delete('/:id', (req, res) => {
  const id = req.params.id
  admin.database().ref(`/posts/${id}`).remove()
    .then(function () {
      console.log("Remove succeeded")
      res.send(id)
    }).catch(function (err) {
      console.log("Remove failed: " + err.messagge)
    })
});


// Expose Express API as a single Cloud Function:
exports.posts = functions.https.onRequest(app);

