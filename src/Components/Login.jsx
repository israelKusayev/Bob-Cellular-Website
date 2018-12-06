import React, { Component } from 'react';
class Login extends Component {
  state = {
    error: '',
    identityCard: ''
  };

  handleChange = ({ target }) => {
    this.setState({ identityCard: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || '' });
    if (error) return;
    this.props.onLogin(this.state.identityCard);
  };

  validate = () => {
    if (this.state.identityCard.trim() === '') {
      return 'Identity card is required';
    }
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h2 className="text-center mb-5">Login</h2>
          <div className="row">
            <div className="col-md-3" />
            <form className="col-md-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Identity card</label>
                <input
                  type="text"
                  autoFocus={true}
                  value={this.state.identityCard}
                  onChange={this.handleChange}
                  className="form-control"
                />
                {this.state.error && (
                  <div className="alert alert-danger">{this.state.error}</div>
                )}
                {this.props.error && (
                  <div className="alert alert-danger">{this.props.error}</div>
                )}
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
