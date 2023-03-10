import React from "react"
import styled from "styled-components"
import { Container, Flights_Button, Flights_Container, Section, Section_Button } from './styles'
import { Flights } from '../../../types'
type Props = {
    flights: any
}


const Flight = ({ flights }: Props) => {
    return (
        <Flights_Container>
            <Container>
                <Section />
                <Section_Button />
                <Flights_Button >
                   <p className="book_flight__button">Book flight</p> 
                    </Flights_Button>
            </Container>
        </Flights_Container>
    )
}
export default Flight