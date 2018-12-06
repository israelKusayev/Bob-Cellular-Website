import React, { Component } from 'react';
import LineInfo from './lineInfo';

class CustomerInfo extends Component {
  state = {
    lineInfo: {}
  };
  handleLineSelect = async ({ target }) => {
    await fetch(
      'http://localhost:54377/api/customerWebsite/getLineInfo/' + target.value
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const lineInfo = JSON.parse(data);
        this.setState({ lineInfo });
      })
      .catch(() => {
        this.setState({ error: 'Customer not found' });
      });
  };
  render() {
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
              {this.props.lines.map((l) => (
                <option key={l.LineId}>{l.LineNumber}</option>
              ))}
            </select>
          </form>
        </div>
        <LineInfo info={this.state.lineInfo} />
      </React.Fragment>
    );
  }
}

export default CustomerInfo;
