import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import UtilsDemo from './pages/utilsDemo';
import User from './pages/user';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/utils">
                        <UtilsDemo />
                    </Route>

                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
