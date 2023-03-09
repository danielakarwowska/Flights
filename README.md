# Flights

Goals
The solution should contain the following elements:

Flights list page
Flights list should be fetched on page enter (GET /flights)
Each flight should have a button that will allow to display flight details (GET /flights/:uuid). You can display them in a modal or just expand the flight item - its up to you. Remember that all fields returned by this endpoint are optional.
Flights should appear sorted. Above the flights list there should be an input that will allow user to select sorting option (Price or Departure time - by departure time I mean departure.dateTime of the first bound in flight). By default flights should be sorted by Price
Each flight should have a button that will book a flight (POST /flights { uuid })
If book action succeed then the user should be redirected to confirmation page
Keep in mind that all the endpoints may take some time to finish and may also throw an error and both of those states should be handled
During implementation of flights list and details please keep in mind that the UI should be responsive. Breakpoints that we want you to use are provided below.
Confirmation page
Just a simple page with a message that everything went fine without any calls to api
This page should be created and added to the routing
