import { Flights_Container } from "./styles"; 
import Flight from "./flight";
import { FlightType } from "../../types";
type Props = {
  flights: FlightType[] 
}

const Flights = ({flights}: Props) => {
  console.log(flights)
  return (
    <main>
      {flights.map((oneFlight, index) => 
       <Flight
       key={index}
       oneFlight={oneFlight}/>
      )}
      </main>
  )
}

export default Flights;
