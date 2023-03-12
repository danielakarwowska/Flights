import Flight from "./flight";
import { FlightTypes } from "../../types";
type Props = {
  flights: FlightTypes[]
}

const Flights = ({ flights }: Props) => {
  return (
    <main>
      {flights.map((flight) =>
        <li key={flight.uuid}>
            <Flight
            flight={flight} />
        </li>
      )}
    </main>
  )
}

export default Flights;
