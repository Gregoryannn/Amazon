import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from './pages/Checkout';
import Login from './pages/Login';
const App = () => {
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