import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from 'axios'
import Flights from "./Flights";
const Routes = () => {
  const [flights, setFlights] = useState([])
  
  useEffect(() => {
    const fetchNews = async () => {
       try {
          const response = await axios.get(`http://localhost:3001/flights`)
          setFlights(response.data)
          console.log(response.data)
       } catch (error) {
          console.log('error')
       }
    }
      fetchNews()
 }, [])

 
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


