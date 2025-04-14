import React from 'react'
import { useParams } from 'react-router-dom';

export default function User() {
  const {id} = useParams();
  return <div>I'm a User & my ID is {id}</div>;
}
