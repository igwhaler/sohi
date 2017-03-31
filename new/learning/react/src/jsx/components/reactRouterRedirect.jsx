/*import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <div>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/prorected" component={Protected} />
            </div>
        </div>
    </Router>
)

const fakeAuth = {
    isAuthenticated: false,

    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },

    signout(cb) {
        this.isAhthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!<Button onClick={() => {
                fake.signout(() => history.push("/"))
            }}>Sign Out</Button>
        </p>
    ):(
        <p>You are not logged in.</p>
    )
))

const PrivateRoute = ({component, ...rest}) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            React.createElement(component, props)
        ):(
            <Redirect to={{
                pathname: "/login",
                state: {from: props.location}
            }}/>
        )
    )} />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
    state: {
        redirectToReferrer: false
    }

    login() {
        fakeAuth.authenticate(() => {
            this.state({
                redirectToReferrer: true
            })
        })
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: "/"}}
        const {redirectToReferrer} = this.state;

        if(redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div>
                <p>You mast login to view the page at {from.pathname}</p>
                <button onClick={this.login}>Login in</button>
            </div>
        )
    }
}

export default AuthExample*/