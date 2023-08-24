import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import {BrowserRouter as Routes,Router} from 'react-router-dom';
import { BarChart,PieChart, Pie, Tooltip, Bar,XAxis,YAxis,Legend,CartesianGrid } from 'recharts';

const socket=io('http://localhost:4000');
function App() {

  // const data=[
  //   {name:"Beed",value:600},
  //   {name:"Nashik",value:800},
  //   {name:"Sambhajinagar",value:900},
  //   {name:"Ahmednagar",value:950},
  // ];

  const [data,setdata]=useState([]);

  useEffect(() => {
    socket.on('editData', (updatedData) => {
      setdata(updatedData);
    });

    socket.on('addData', (newData) => {
      setdata((prevData) => [...prevData, newData]);
    });

    socket.on('deleteData', (deletedDataId) => {
      setdata((prevData) => prevData.filter((data) => data._id !== deletedDataId));
    });

    // Fetch initial data from the server
    socket.emit('fetchData');

    // Cleanup socket.io connection when unmounting the component
    return () => socket.disconnect();
  }, []);
  
  return (
    <div >
      <h1 style={{textAlign:"center"}}>Charts</h1>
      <div className="App">
        
      
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>

        
    </div>
    </div>
  );
}

export default App;
