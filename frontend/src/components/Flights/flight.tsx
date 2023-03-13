import React, { Fragment, useCallback, useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"
import { Container, ContainerBottom, AirBoxBottom, LineBottom, DepartureBottom, DepartureTimeBottom, DepartureDateBottom, DestinationDateBottom, DestinationBottom, DestinationTimeBottom, Line, Departure, Destination, DepartureTime, DepartureDate, DestinationDate, DestinationTime, Airline, AirLineBox, Popup, LineOfAirline, Price, Flights_Button, Flights_Container, Section, Section_Button } from './styles'
import { FlightTypes } from '../../types'
import { DateTime, Duration } from 'luxon'
import Modal from '../modal/modal'
type Props = {
    flight: FlightTypes
}

const Flight = ({ flight }: Props): JSX.Element => {

    const [openModal, setOpenModal] = useState(false)

    const { airlineCode, uuid, price, bounds } = flight

    const formatHour = (date: any) => {
        const correctDate = DateTime.fromISO(date)
        return correctDate.toLocaleString(DateTime.TIME_24_SIMPLE)
    }
    const formatDay = (date: any) => {
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
                    <Line />
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
                {bounds[1] && (
                <Fragment>
        <AirBoxBottom>
        <Airline>{airlineCode}</Airline>
        <LineOfAirline src={`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/${airlineCode}.png`} />
    </AirBoxBottom>
    <DepartureBottom>{bounds[1].departure.code}</DepartureBottom>
    <DepartureTimeBottom>{formatHour(bounds[1].departure.dateTime)}</DepartureTimeBottom>
    <DepartureDateBottom>{formatDay(bounds[1].departure.dateTime)}</DepartureDateBottom>
    <span className="dot_start_bottom"></span>
    <LineBottom />
    <span className="dot_end_bottom"></span>
    <DestinationBottom>{bounds[0].destination.code}</DestinationBottom>
    <DestinationTimeBottom>{formatHour(bounds[1].destination.dateTime)}</DestinationTimeBottom>
    <DestinationDateBottom>{formatDay(bounds[1].destination.dateTime)}</DestinationDateBottom>
    </Fragment>
    )}
            </Container>
        </Flights_Container>
    )
}
export default Flight