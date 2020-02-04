// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// // The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const cors = require('cors');

const postsApi = express();
postsApi.use(cors({ origin: true }));


//Posts API at here ( GET POST DELETE )
postsApi.get('/', (req, res) => {
  admin.database().ref('/posts').once("value", function (data) {
    var posts = []
    data.forEach((childSnapshot)=>{
      var childKey = childSnapshot.key
      var childData = childSnapshot.val()
      var post = {childKey,childData}
      posts.push(post)
      console.log(childKey)          
    })
    console.log(data)
    res.send(posts)
  });
});

postsApi.get('/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  admin.database().ref(`/posts/${id}`).once("value", (data)=> {
    console.log(data.val());
    res.send(data.val());
  });
  
});

postsApi.post('/', (req, res) => {
  const data = req.body;
  admin.database().ref('/posts').push(data);
  res.send(data)
});



postsApi.put('/:id', (req, res) => {
  const id = req.params.id
  const data = req.body;
  admin.database().ref(`/posts/${id}`).update(data);
  res.send(data)
});

postsApi.delete('/:id', (req, res) => {
  const id = req.params.id
  admin.database().ref(`/posts/${id}`).remove()
    .then(() => {
      console.log("Remove succeeded")
      res.send({data:"success"})
    }).catch((err) => {
      console.log("Remove failed: " + err.messagge)
    })
});
// Expose Express API as a single Cloud Function:
exports.posts = functions.https.onRequest(postsApi);



