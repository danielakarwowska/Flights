import React, { useCallback } from "react"
import styled from "styled-components"
import { Container, Price, Flights_Button, Flights_Container, Section, Section_Button } from './styles'
import { FlightType } from '../../types'
type Props = {
    oneFlight: FlightType
}
export const LineOfAirline = styled.div`
display:flex;
top: 58px;
left: 40px;
width: 100px;
height: 49px;
background: transparent url('img/Bitmap.png') 0% 0% no-repeat padding-box;
opacity: 1;`



const Flight = ({ oneFlight }: Props) => {
    const { uuid, airlineCode, price, bounds, dateTime } = oneFlight
    console.log(uuid)

    return (
        <Flights_Container>
            <Container>
                <Section />
                <LineOfAirline>            
                {airlineCode}
                </LineOfAirline>
                <Section_Button>
                    <Price>
                        {price.amount}
                        {price.currency}
                    </Price>
                </Section_Button>
                <Flights_Button >
                    <strong className="book_flight__button">Book flight</strong>
                </Flights_Button>
                <strong className="line_width"></strong>
            </Container>
        </Flights_Container>
    )
}
export default Flight