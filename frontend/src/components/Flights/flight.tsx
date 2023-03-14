import React, { Fragment, useCallback, useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import styled from "styled-components"
import { Container, ContainerBottom, AirBoxBottom, LineBottom, DepartureBottom, DepartureTimeBottom, DepartureDateBottom, DestinationDateBottom, DestinationBottom, DestinationTimeBottom, Line, Departure, Destination, DepartureTime, DepartureDate, DestinationDate, DestinationTime, Airline, AirLineBox, Popup, LineOfAirline, Price, Flights_Button, Flights_Container, Section, Section_Button } from './styles'
import { FlightTypes } from '../../types'
import { DateTime, Duration } from 'luxon'
import Modal from '../modal/modal'
import { formatDuration } from "../../utils/duration"
import axios from "axios"
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
    const [data, setData] = useState({data: []})
    const [details, setDetails] = useState(false)
    const [err, setErr] = useState<string>('')
    const handleClick = async () => {
        setDetails(true)
    try {
        const {data} = await axios.get(`http://localhost:3001/flights/${uuid}`, {
            headers: {
                Accept: 'application/json',
              },
        })
        console.log(data);

    setData(data)    
    }
      catch (err) {
        console.log(err)
     } finally {
        setDetails(false);
      }
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
                    <Line><span>{formatDuration(bounds[0].duration)}</span></Line>
                    <span className="dot_end"></span>
                    <Destination>{bounds[0].destination.code}</Destination>
                    <DestinationTime>{formatHour(bounds[0].destination.dateTime)}</DestinationTime>
                    <DestinationDate>{formatDay(bounds[0].destination.dateTime)}</DestinationDate>

                <Popup onClick={() => setOpenModal(true)}>Vluchtdetails</Popup>
                <Modal openModal={openModal}
                    uuid={uuid}
                    bounds={bounds}
                    onClose={() => setOpenModal(false)} />
                <Section_Button>
                    <Price>
                        {price.amount}
                        {price.currency}
                    </Price>
                </Section_Button>
                {err && <h2>{err}</h2>}
                <Flights_Button onClick={handleClick} >
                    <strong className="book_flight__button">Book flight</strong>
                </Flights_Button>
                {details && <h2>Loading...</h2>}
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
    <LineBottom ><span>{formatDuration(bounds[1].duration)}</span></LineBottom>
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