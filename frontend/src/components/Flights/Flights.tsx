import { Flights_Container } from "./styles"; 
import Flight from "./flight";
type Props = {
  flights: string[] 
}

const Flights = ({flights}: Props) => {
  console.log(flights)
  return (
      <Flight
      flights={flights}/>
  )
}

export default Flights;
