import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './style/common.less';

import Header from './view/Components/Header'
import HomePage from './view/HomePage';
import FE from './view/FE'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*header*/}
          <Header />

          <div className="container">
            {/*首页*/}
            <Route
              exact
              path="/"
              render={() => (
                <HomePage />
              )}
            />

            {/*FE模块*/}
            <Route
              exact
              path="/html/:id"
              render={(router) => (
                <FE name="fe" counter={100} router={router}/>
              )}
            />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;