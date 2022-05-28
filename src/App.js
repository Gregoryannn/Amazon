import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

const promise = loadStripe(
    "pk_test_51HSDKsDgq6i9SALTKlrxpCxlYE6jmxmkwr9XrDLrXenzpR2LTRCoacZu9vc00R5DzoMgUTsddly7nf2SDXD9lUjP00Cb7l87Ia"
);
const App = () => {
    const [{ }, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log("user: ", authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Navbar />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Navbar />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/orders">
                        <Navbar />
                        <Orders />
                    </Route>
                    <Route path="/">
                        <Navbar />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
export default App;