import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../StudentContext';  
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../App.css';

function Dashboard() {
  const { students } = useContext(StudentContext); 
  const [gradeCounts, setGradeCounts] = useState({ grade10: 0, grade11: 0, grade12: 0 });

  useEffect(() => {
    calculateGradeCounts(students);  
  }, [students]);

  const calculateGradeCounts = (data) => {
    const counts = { grade10: 0, grade11: 0, grade12: 0 };
    data.forEach((student) => {
      if (student.class === '10th Grade') counts.grade10++;
      else if (student.class === '11th Grade') counts.grade11++;
      else if (student.class === '12th Grade') counts.grade12++;
    });
    setGradeCounts(counts);
  };

  const chartData = {
    labels: ['Grade 10', 'Grade 11', 'Grade 12'],
    datasets: [
      {
        label: 'Number of Students',
        data: [gradeCounts.grade10, gradeCounts.grade11, gradeCounts.grade12],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Total Students: {students.length}</p>
      <div className="dashboard-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
