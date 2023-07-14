import { useState } from "react";

const Results = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return(
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(props.data).map((value, index) => {
          return(
          <tr key={index}>
            <td>{value.year}</td>
            <td>{formatter.format(value.savingsEndOfYear)}</td>
            <td>{formatter.format(value.yearlyInterest)}</td>
            <td>{formatter.format(value.yearlyContribution)}</td>
          </tr>
          )
       })}
        
      </tbody>
    </table>
  );
}

export default Results;