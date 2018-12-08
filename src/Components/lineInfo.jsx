import React from 'react';

const LineInfo = ({ info }) => {
  // if(!info){return null}
  return (
    <React.Fragment>
      <div className="row mt-4">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h3>Your line information for the last month</h3>
          <div className="mb-1">
            <b> Total Line Price: </b>
            {info.TotalLinePrice}
          </div>
          <div>
            <b>Total Minute:</b> {info.TotalMinutes}
          </div>
          <div>
            <b> Total Sms:</b> {info.TotalSms}
          </div>
          <div>
            <b> Total Minute of Top Number:</b> {info.TotalMinutesTopNumber}
          </div>
          <div>
            <b> Total Minute of Top 3 Number: </b>
            {info.TotalMinutesTop3Numbers}
          </div>
          <div>
            <b> Total Minute With Family:</b> {info.TotalMinutesWithFamily}
          </div>
          <hr />
          <h4>Recommendation</h4>
          <div>
            {info.RecommendPackages &&
              info.RecommendPackages.map((p) => (
                <div>
                  <b> Package Name:</b>
                  <i> {p.PackageName} </i>, <b> Price:</b>
                  <i> {p.TotalPrice}</i>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LineInfo;
