<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => setUsers(data.users));
  }, []);
  console.log(users);
  return (
    <>
    {/* <Button variant='success'>Download Now</Button> */}
    <div className='d-flex flex-wrap justify-content-center'>
      {users.map((user) => (
        <Card key={user.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.image} />
          <Card.Body>
            <Card.Title>{user.firstName} {user.lastName}</Card.Title>
            <Card.Text>
              {user.university}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 
      ))}
    </div>
    </>
  )
=======
import { use, useEffect, useState } from "react";
import LoadUser from "./assets/LoadUser";
import Image from "./Image";
import User from "./User";
import WorkSample from "./WorkSample";
import Navbar from "./Navbar";

export default function App(){
  const workData = [
    {/*
      year:"2018-2022",
      experience:"B.Sc in Computer Science & Engr.",
      institute:"University of Asia Pacific",
    */},
  ];
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then ((res)=> res.json())
    .then ((data)=> setUser(data.users));
  }, []);
  console.log(user);
  return (
    <>
    {/* <Navbar/>
      <div className="flex gap-2 flex-wrap justify-center">
      {user.map((user) => (
        <User key={user.id} userInfo={user}/>
      ))};
    {/*workData.map((work) => (
        <WorkSample work={work} />
      ))*/}
      
    </div> */}

      <Form />
    </>
  );
>>>>>>> f0856b8ed05e1826adaa821efd53fe3a71f12f62
}

export default App