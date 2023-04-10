import React, { Component,useEffect,useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddShipment from './Shipments/addShipment'

require("./Shipments/addShipment");
export default function ConfirmShipment(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        
       
    getShipmentDetails();
},[]);
    
const getShipmentDetails=(id)=>{
    
   
    fetch("http://localhost:5000/getShipmentDetails",{
            method:"GET"         
          })
          
      .then((res)=>res.json())
      .then((data)=>{
      console.log(data,"Shipment Data");
      setData(data.data);
      
      });
  
}


return(
    
<div className="auth-wrapper">
        <div style={{width:"auto"}}>
            <h2>Vehicle Info</h2>
            <table style={{width:500}}>
                <tr>
                <th>Vehicle Image</th>
                <th>Vehicle Type</th>
                <th>Load Capacity</th>
                <th>Passenger Seating</th>
                <th>4 Hours charge</th>
                <th>Daily charge</th>
                </tr>



            {data.map(i=>{
                   
                  return(

                 
                     <tr>
                      
                     <td> {i.fname}</td>
                      <td>{i.phone}</td>
                     <td>{i.addressFrom}</td>
                     <td> {i.addressTo}</td>
                     <td> {i.selectedShip}</td>
                     <td> {i.selectedService}</td>
                     <td> {i.dimensions}</td>
             
                    </tr>
                          
                    )
         })}
        
        </table>
        </div>
    </div>   
)   
             
 }