const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
    "sk_test_51HSDKsDgq6i9SALTyPxDxZcuGyzVKcJtqiC0TB6aLNzfHWsE3uCl0r12ACG9pkVTmv3iDiZdOjEX56GIlLdjnbOD008Q4dKFt0"
);
// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API route
app.get('/', (req, res) => {
    res.status(200).send('HELLO')
});


// Listen command
exports.api = functions.https.onRequest(app);

// NOTE: example endpoint
// http://localhost:5001/clone-b271c/us-central1/api



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });