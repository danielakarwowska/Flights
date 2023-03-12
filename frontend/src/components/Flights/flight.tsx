import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { Container, Departure, Destination, DepartureTime,DepartureDate, DestinationDate, DestinationTime, Airline, AirLineBox, Popup, LineOfAirline, Price, Flights_Button, Flights_Container, Section, Section_Button } from './styles'
import { FlightTypes } from '../../types'
import { DateTime, Duration } from 'luxon'
import Modal from '../modal/modal'
import BackFlight from "./flight_back"
type Props = {
    flight: FlightTypes
}
export const Line = styled.span`
grid-column: 3/4;
grid-row: 3/4;
margin-left: 10px;
margin-top: -10px;
top: 85px;
left: 266px;
width: 90px;
height: 0px;
border: 2px solid #FCC002;
opacity: 1;`
const Flight = ({ flight }: Props): JSX.Element => {

    const [openModal, setOpenModal] = useState(false)

    const { airlineCode, uuid, price, bounds } = flight

    const formatHour = (date: string) => {
        const correctDate = DateTime.fromISO(date)
        return correctDate.toLocaleString(DateTime.TIME_24_SIMPLE)
    }
    const formatDay = (date: string) => {
        const jsDate = new Date(date)
        return new Intl.DateTimeFormat("nl-NL", {
            weekday: "short",
            day: "numeric",
            month: "short",
        }).format(jsDate)
    }
    return (
        <Flights_Container>
            <Container>
                <Section />
                    <AirLineBox>
                        <Airline>{airlineCode}</Airline>
                        <LineOfAirline src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
                    </AirLineBox>
                            <Departure>{bounds[0].departure.code}</Departure>
                            <DepartureTime>{formatHour(bounds[0].departure.dateTime)}</DepartureTime>
                            <DepartureDate>{formatDay(bounds[0].departure.dateTime)}</DepartureDate>
                            <span className="dot_start"></span>
                            <Line></Line>
                            <span className="dot_end"></span>
                            <Destination>{bounds[0].destination.code}</Destination>
                            <DestinationTime>{formatHour(bounds[0].destination.dateTime)}</DestinationTime>
                            <DestinationDate>{formatDay(bounds[0].destination.dateTime)}</DestinationDate>
                    <Popup onClick={() => setOpenModal(true)}>Vluchtdetails</Popup>
                            <Modal openModal={openModal}
                                uuid={uuid}
                                onClose={() => setOpenModal(false)} />
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
            <BackFlight/>
        </Flights_Container>
    )
}
export default Flight