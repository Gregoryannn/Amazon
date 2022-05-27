import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./pages/Payment";

const App = () => {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("the user is: ", authUser);
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
    return ( <
        Router >
        <
        div className = "app" >
        <
        Switch >
        <
        Route path = "/login" >
        <
        Login / >
        <
        /Route> <
        Route path = "/checkout" >
        <
        Navbar / >
        <
        Checkout / >
        <
        /Route> <
        Route path = "/payment" >
        <
        Navbar / >
        <
        Payment / >
        <
        /Route> <
        Route path = "/" >
        <
        Navbar / >
        <
        Home / >
        <
        /Route> <
        /Switch> <
        /div> <
        /Router>
    );
};
export default App;