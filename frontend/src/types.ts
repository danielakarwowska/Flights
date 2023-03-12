import { type } from "os"

export type FlightTypes = {
    uuid: string,
    airlineCode: string,
    price: Price,
    bounds: Bounds[],
    dateTime: string
}
export type Price = {
    amount: number,
    currency: string
}
export type Bounds = {
    departure: {
        code: string,
        name: string,
        dateTime: string
    }
    destination: {
        code: string,
        name: string,
        dateTime: string
    }
    duration: string
}
export interface Details {
    remainingNumberOfSeats: number,
    seatPitch: number,
    freeBaggageAllowed: boolean,
    cabinClass: string
}
