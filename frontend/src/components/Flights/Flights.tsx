import { Container, Grid } from "semantic-ui-react";
import Flight from "./flight";
type Props = {
  flights: string[] 
}

const Flights = ({flights}: Props) => {
  console.log(flights)
  return (
    <Container className="container">
      <Flight
      flights={flights}/>
    </Container>
  )
}

export default Flights;
