import React from 'react';

const LineInfo = ({ info }) => {
  return (
    <React.Fragment>
      <div className="row mt-5">
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className="mb-1">
            <b> Total Line Price: </b>
            {info.TotalLinePrice}
          </div>
          <div>Total Minute: {info.TotalMinutes}</div>
          <div>Total Sms: {info.TotalSms}</div>
          <div>Total Minute of Top Number: {info.TotalMinutesTopNumber}</div>
          <div>
            Total Minute of Top 3 Number: {info.TotalMinutesTop3Numbers}
          </div>
          <div>Total Minute With Family: {info.TotalMinutesWithFamily}</div>
          <hr />
          <h4>Recommendation</h4>
          <div>
            {info.RecommendPackages.map((p) => (
              <div>
                Package Name: {p.PackageName} Price
                {p.PackagePrice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LineInfo;
