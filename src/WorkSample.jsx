import React from 'react'

export default function WorkSample({work}) {
  const myStyle={
      border: "1px solid red",
      padding: "10px",
      backgroundColor: "green",
      color: "white",
      borderRadius: "10px",
      marginTop: "10px",
  };
  //const {year, experience, institute} = props;
  return (
    <div style={myStyle}>
        <span>{work.year}</span>
        <h2>{work.experience}</h2>
        <p>{work.institute}</p>
    </div>
  );
}
