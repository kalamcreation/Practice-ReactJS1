import Image from "./Image";
import WorkSample from "./WorkSample";

export default function App(){
  return (
    <div>
      <WorkSample 
      year={"2018-2022"} 
      experience={"B.Sc in Computer Science & Engr."} 
      institute={"University of Asia Pacific"}
      />
      <WorkSample 
      year={"2022-2024"} 
      experience={"Network Engineering"} 
      institute={"LegendaIT & Communication"}
      />
      <WorkSample/>
      <WorkSample/>
    </div>
  );
}
