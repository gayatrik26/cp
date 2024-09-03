import React from 'react';
import '../styles/Graphs.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Sector } from 'recharts';

// Sample data for different types of charts
const lineGraphData = [
  { name: 'Jan', Easy: 5, Medium: 10, Hard: 2 },
  { name: 'Feb', Easy: 8, Medium: 15, Hard: 5 },
  { name: 'Mar', Easy: 10, Medium: 20, Hard: 8 },
  // Add more data as needed
];

const barGraphData = [
  { name: 'Jan', Solved: 20 },
  { name: 'Feb', Solved: 30 },
  { name: 'Mar', Solved: 40 },
  // Add more data as needed
];

const pieChartData = [
  { name: 'Easy', value: 400 },
  { name: 'Medium', value: 300 },
  { name: 'Hard', value: 300 },
];

const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
  return (
    <g>
      <text x={x} y={y} dy={8} fontSize={15} textAnchor="middle" fill="#333">{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

function Graphs() {
  return (
    <div className="graphs">
      <h3>Monthly Problem Solving</h3>
      <LineChart
        width={800}
        height={400}
        data={lineGraphData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Easy" stroke="#8884d8" />
        <Line type="monotone" dataKey="Medium" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Hard" stroke="#ff7300" />
      </LineChart>

      <h3>Monthly Solved Problems</h3>
      <BarChart
        width={800}
        height={300}
        data={barGraphData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Solved" fill="#8884d8" />
      </BarChart>

      <h3>Problem Difficulty Distribution</h3>
      <PieChart width={800} height={400}>
        <Pie
          activeIndex={0}
          activeShape={renderActiveShape}
          data={pieChartData}
          cx={400}
          cy={200}
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Graphs;
