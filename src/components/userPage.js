import React, { Component,useEffect,useState } from 'react'
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserHome from './userHome';
import AdminHome from './adminHome';

export default function UserPage(){
  const [userData,setUserData]=useState("");
  const [admin,setAdmin]=useState(false);


useEffect(()=>{
    fetch("http://localhost:5000/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data,"userData");
    
    if(data.data.userType=="Admin"){
      setAdmin(true);
    }

    setUserData(data.data);

    
    });
},[]);


return (
  //admin?<h1>"Welcome Admin"</h1>:<UserHome userData={userData}/>
  admin?<AdminHome userData={userData}/>:<UserHome userData={userData}/>
);

}
