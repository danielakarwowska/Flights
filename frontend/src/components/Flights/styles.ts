import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 120px 100px 140px 120px 248px;
  grid-template-rows: 43px 43px 43px 43px 43px 17%; 
  margin: 20px;
  left: 20px;
  width: 728px;
  height: 260px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;`
  
  export const ContainerBottom = styled.section`
  grid-column: 2/5;
  grid-row: 4/6;`

export const Line = styled.span`
  grid-column: 3/4;
  grid-row: 3/4;
  margin-left: 21px;
  margin-top: -10px;
  top: 85px;
  left: 266px;
  width: 90px;
  height: 0px;
  border: 2px solid #FCC002;
  opacity: 1;`

export const Section = styled.section`
  grid-column: 5/6;
  grid-row: 1/4;
  background-color:#FCC002;`

export const Section_Button = styled.section`
  grid-column: 5/6;
  grid-row: 4/7;
  background-color:#FCC002;`

export const Flights_Container = styled.article`
  display: flex;
  margin-left: 50px;
  display: inline-block;
  width: 768px;
  height: 300px;
  background: #F2F2F2 0% 0% no-repeat padding-box;
  opacity: 1;`

export const Flights_Button = styled.button`
  top: 212px;
  left: 548px;
  width: 180px;
  height: 48px;
  grid-column: 5/6;
  grid-row: 5/7;
  background: #008EFF 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 1;
  margin: 20px;
`
export const Price = styled.span`
  height: 39px;
  text-align: left;
  font: normal normal bold 32px/19px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`
export const LineOfAirline = styled.img`
  width: 37px;
  height: 35px;
  `
export const LineBottom = styled.span`
  grid-column: 3/4;
  grid-row: 6;
  margin-left: 21px;
  margin-top: -10px;
  top: 85px;
  left: 266px;
  width: 90px;
  height: 0px;
  border: 2px solid #FCC002;
  opacity: 1;`

export const AirBoxBottom = styled.section`
    grid-column: 1/2;
    grid-row: 5/6;
    display: flex;
    align-items: center;
    justify-content: flex-start!important;`
export const AirLineBox = styled.section`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  justify-content: flex-start!important;
`
export const Popup = styled.div`
  grid-column: 4/5;
  grid-row: 1/2;
` 
export const Bound = styled.div`
  top: 62px;
  left: 165px;
  width: 87px;
  height: 39px;
  text-align: right;
  font: normal normal bold 32px/25px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`
export const Airline = styled.strong`
  top: 58px;
  left: 40px;
  width: 53px;
  height: 49px;
  background: transparent url('img/Bitmap.png') 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  margin-right: 5px;
  align-items: center;
  justify-content: flex-end;`

export const Departure = styled.section`
  grid-row:2/3;
  grid-column:2/3;
  height: 22px;
  text-align: right;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`

export const DepartureTime = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  margin-top:20px;
  text-align: right;
  font: normal normal bold 32px/25px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
export const DepartureDate = styled.div`
  grid-column: 2/3;
  grid-row: 3;
  margin-left: 14px;
  width: 84px;
  height: 22px;
  text-align: right;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
export const DestinationTime = styled.div`
  grid-column: 4/5;
  grid-row: 2/3;
  margin-top: 20px;
  text-align: left;
  font: normal normal bold 32px/25px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
export const DestinationDate = styled.div`
  grid-column: 4/5;
  width: 84px;
  height: 22px;
  text-align: left;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
export const Destination = styled.section`
  top: 47px;
  grid-row:2/3;
  grid-column:4/5;;
  width: 40px;
  height: 22px;
  text-align: left;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  `
  export const DepartureBottom = styled.section`
  grid-row:4/5;
  grid-column:2/3;
  margin-top:34px;
  height: 22px;
  text-align: right;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
  export const DepartureTimeBottom = styled.div`
  grid-row: 5;
  grid-column: 2/3;
  margin-top:20px;
  text-align: right;
  font: normal normal bold 32px/25px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
  export const DepartureDateBottom = styled.div`
  grid-column: 2/3;
  grid-row: 6;
  margin-left: 14px;
  width: 84px;
  height: 22px;
  text-align: right;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
  export const DestinationBottom = styled.div`
    top: 47px;
    grid-row:4/5;
    grid-column:4/5;;
    width: 40px;
    height: 22px;
    text-align: left;
    font: normal normal normal 18px/24px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    margin-top:34px;
    opacity: 1;`
  export const DestinationTimeBottom = styled.div`
grid-column: 4/5;
  grid-row: 5;
  margin-top: 20px;
  text-align: left;
  font: normal normal bold 32px/25px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`
  export const DestinationDateBottom = styled.div`
    grid-column: 4/5;
  width: 84px;
  height: 22px;
  text-align: left;
  font: normal normal normal 18px/24px Montserrat;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;`