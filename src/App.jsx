import Image from "./Image";
import WorkSample from "./WorkSample";

export default function App(){
  const workData = [
    {
      year:"2018-2022",
      experience:"B.Sc in Computer Science & Engr.",
      institute:"University of Asia Pacific",
    },
    {
      year:"2022-2024", 
      experience:"Network Engineering",
      institute:"LegendaIT & Communication",
    },
    {
      year:"2024-2025", 
      experience:"Software Engineering",
      institute:"Mountain Soft Club",
    },
  ];

  return (
    <div>
    {workData.map((work) => (
        <WorkSample work={work} />
      ))}
    </div>
  );
}
