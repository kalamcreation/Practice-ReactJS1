import React, {useState} from 'react';

export default function WorkSample({work}) {
  const [myData, setMyData]=useState(1);
  //let myData = 0;
  const design={
      border: "1px solid red",
      padding: "10px",
      backgroundColor: "green",
      color: "white",
      borderRadius: "10px",
      marginTop: "10px",
  };
  const changeData = ()=> {
    setMyData(myData + 1);
    console.log(myData);
  };

  //const {year, experience, institute} = props;
  return (
    <div style={design}>
        <h1>Counter {myData}</h1>
        <p>myData: {myData}</p>
        <button onClick={changeData}>Update</button>
    </div>
  );
}
