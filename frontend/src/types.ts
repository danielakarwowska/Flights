export type FlightType = {
    uuid: string,
    airlineCode: string,
    price: Price,
    bounds: Bounds[],
    dateTime: string
}
export type Price =  {
    amount: number,
    currency: string
}
export type Bounds = {
    departure: {
        code: string,
        name: string,
        dateTime: Date
    }
    destination: {
        code: string,
        name: string,
        dateTime: string
    }
    duration: string
}
export type Details = {
    remainingNumberOfSeats: number,
    seatPitch: number,
    freeBaggageAllowed: boolean,
    cabinClass: string
}
