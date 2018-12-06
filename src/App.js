import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import CustomerInfo from './Components/customerInfo';
import NotFound from './Components/notFound';

class App extends Component {
  state = {
    name: 'israel',
    error: '',
    customer: {}
  };
  getCustomerLines = async (identityCard) => {
    await fetch(
      'http://localhost:54377/api/customerWebsite/getCustomerLines/' +
        identityCard
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const customer = JSON.parse(data);
        this.setState({ customer });
        this.props.history.push('/customer-info');
      })
      .catch(() => {
        this.setState({ error: 'Customer not found' });
      });
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-center">Bob Cellular</h1>
        <hr />
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                error={this.state.error}
                onLogin={this.getCustomerLines}
              />
            )}
          />
          <Route
            path="/customer-info"
            render={(props) => (
              <CustomerInfo {...props} lines={this.state.customer.Lines} />
            )}
          />
          <Route path="/not-found" component={NotFound} />

          <Redirect from="/" exact={true} to="/login" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
