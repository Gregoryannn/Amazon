const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HSDKsDgq6i9SALTyPxDxZcuGyzVKcJtqiC0TB6aLNzfHWsE3uCl0r12ACG9pkVTmv3iDiZdOjEX56GIlLdjnbOD008Q4dKFt0"
);
// API
// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

    app.post("/payments/create", async (request, response) => {
        const total = request.query.total;

        // console.log("Payment Request Received, amount: ", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "cad",
        });
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    });
    // Listen command
    exports.api = functions.https.onRequest(app);
// NOTE: example endpoint
// http://localhost:5001/clone-b271c/us-central1/api