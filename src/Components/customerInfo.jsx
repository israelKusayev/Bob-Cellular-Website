import React, { Component } from 'react';
import LineInfo from './lineInfo';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
  componentWillMount() {
    if (!this.props.lines) {
      this.props.history.replace('/login');
    }
  }

  constructor(props) {
    debugger;
    super(props);
  }

  state = { lineInfoError: '', lineInfo: null };

  handleLineSelect = async ({ target }) => {
    await fetch(
      'http://localhost:54377/api/customerWebsite/getLineInfo/' + target.value
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const lineInfo = JSON.parse(data);
        this.setState({ lineInfo, lineInfoError: '' });
      })
      .catch(() => {
        this.setState({
          lineInfo: null,
          lineInfoError: 'This line has no information for this month'
        });
      });
  };

  render() {
    console.log('customer lines', this.props.lines);

    if (this.props.lines) {
      return (
        <React.Fragment>
          <h2 className="text-center mb-5">Customer info</h2>
          <div className="row">
            <div className="col-md-3" />
            <form className="col-md-6">
              <label htmlFor="selectline">Select line</label>
              <select
                onChange={this.handleLineSelect}
                className="form-control"
                id="selectline"
              >
                <option value="" disabled={true} selected={true}>
                  Choose one
                </option>
                {this.props.lines.map((l) => (
                  <option key={l.LineId}>{l.LineNumber}</option>
                ))}
              </select>
              {this.state.lineInfoError && (
                <div className="alert alert-danger">
                  {this.state.lineInfoError}
                </div>
              )}
            </form>
          </div>
          {this.state.lineInfo && <LineInfo info={this.state.lineInfo} />}
        </React.Fragment>
      );
    }
    return null;
  }
}

const mapStatetoProps = (state) => {
  debugger;
  return {
    lines: state.customer.Lines
  };
};

export default connect(mapStatetoProps)(CustomerInfo);
