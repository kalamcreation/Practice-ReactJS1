import LoadUser from "./assets/LoadUser";
import Image from "./Image";
import WorkSample from "./WorkSample";

export default function App(){
  const workData = [
    {/*
      year:"2018-2022",
      experience:"B.Sc in Computer Science & Engr.",
      institute:"University of Asia Pacific",
    */},
  ];

  return (
    <div>
    {/*workData.map((work) => (
        <WorkSample work={work} />
      ))*/}
      <LoadUser/>
    </div>
  );
}
