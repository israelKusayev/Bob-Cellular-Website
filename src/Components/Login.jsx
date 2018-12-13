import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../Redux/Actions/customernActions';

class Login extends Component {
  state = {
    identityCard: '',
    error: ''
  };

  handleChange = ({ target }) => {
    this.setState({ identityCard: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || '' });
    if (error) return;
    this.props.updateCustoemr(this.state.identityCard, this.props.history);
  };

  validate = () => {
    if (this.state.identityCard.trim() === '') {
      return 'Identity card is required';
    }
    return null;
  };

  render() {
    console.log('login rendered');

    return (
      <React.Fragment>
        <div>
          <h2 className="text-center mb-5">Login</h2>
          <div className="row">
            <div className="col-md-3" />
            <form className="col-md-6" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Customer ID</label>
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
                  <div className="alert alert-danger">{this.propsy.error}</div>
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

const mapStateToProps = (state) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCustoemr: (id, history) => dispatch(fetchCustomer(id, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
