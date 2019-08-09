import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Hehe from './pages/hehe'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/hehe/1">Hehe</Link>
                </div>

                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    {/* <Route path="/hehe/:id" component={Hehe} /> */}
                    <Route
                        path="/hehe/:id"
                        render={(props) => <Hehe {...props} />}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
