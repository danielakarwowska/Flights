import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from 'axios'
import Flights from "./Flights";
import { FlightTypes } from "../types";
const Routes = () => {
  const [flights, setFlights] = useState<FlightTypes[]>([])
  
  useEffect(() => {
    const fetchNews = async () => {
       try {
          const response = await axios.get(`http://localhost:3001/flights`)
          setFlights(response.data)
       } catch (error) {
          console.log('error')
       }
    }
      fetchNews()
 }, [])
//  useEffect(() => {
//   const uuid = 'aeaf215a-a7e2-4e05-a0cd-1ee0cf4ea6c8'
//   const fetchNews = async () => {
//      try {
//         const response = await axios.get(`http://localhost:3001/flights/${uuid}`)
//         setDetails(response.data)
//         console.log(response.data)
//      } catch (error) {
//         console.log('error')
//      }
//   }
//     fetchNews()
// }, [])

 console.log(flights)
  return (
    <Switch>
      <Route path="/flights">
        <Flights
        flights={flights}/>
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;


