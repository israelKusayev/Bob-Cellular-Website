import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Components/Login';
import CustomerInfo from './Components/customerInfo';
import NotFound from './Components/notFound';

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1 className="text-center">Bob Cellular</h1>
        <hr />
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/customer-info" component={CustomerInfo} />
            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact={true} to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  null,
  mapDispatchToProps
)(App);
