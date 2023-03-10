import styled from "styled-components";

export const Container = styled.main`
display: grid;
grid-template-columns: 120px 120px 120px 120px 248px;
grid-template-rows: 43px 43px 43px 43px 43px 17%; 
margin: 20px;
left: 20px;
width: 728px;
height: 260px;
background: #FFFFFF 0% 0% no-repeat padding-box;
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