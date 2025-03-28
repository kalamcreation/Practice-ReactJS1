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
}

export default App