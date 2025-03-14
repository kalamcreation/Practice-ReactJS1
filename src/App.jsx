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
}
