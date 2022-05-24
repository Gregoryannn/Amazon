import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from './components/Checkout';
const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
export default App;