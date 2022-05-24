import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from './components/Checkout';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Navbar />

                        <Checkout />
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