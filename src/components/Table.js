import React from 'react';
import '../styles/Table.css';

const tableData = [
  { month: 'Jan', easy: 5, medium: 10, hard: 2 },
  { month: 'Feb', easy: 8, medium: 15, hard: 5 },
  { month: 'Mar', easy: 10, medium: 20, hard: 8 },
  // Add more data as needed
];

const Table = () => {
  return (
    <div className="table-container">
      <h3>Monthly Problem Statistics</h3>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Easy</th>
            <th>Medium</th>
            <th>Hard</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.month}</td>
              <td>{row.easy}</td>
              <td>{row.medium}</td>
              <td>{row.hard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
