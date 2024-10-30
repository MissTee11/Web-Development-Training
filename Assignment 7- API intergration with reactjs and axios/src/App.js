import React from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';


function App() {

  const columns =[
    {
      name: 'Name',
      selector:row =>`${row.first_name} ${row.last_name}`
    },
    {
      name: 'Age',
      selector:row =>row.age
    },
    {
      name: 'Email',
      selector:row =>row.email
    },
    {
      name: 'Gender',
      selector:row =>row.gender
    },
    {
      name: 'Address',
      selector:row =>row.address
    },
    {
      name: 'Phone',
      selector:row =>row.phone
    },
    {
      name: 'Image',
      selector:row =>row => <img src={row.image} alt="student image"/>
    },

  ];
  const [studentData, setStudentData] = useState([]);
  
  useEffect(() => {
  
    axios.get('https://freetestapi.com/apis/students')
      .then(response => {
        setStudentData(response.data); 
      
      })
      .catch(err => {
        console.log(err);
        
      });
  }, []); 

  return (
    <div className="App">
      <DataTable
      columns={columns}
      data ={studentData}
      ></DataTable>
      
    </div>
  );
}

export default App;
