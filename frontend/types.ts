export interface Flights {
    uuid: string,
    airlineCode: string,
    price: Price,
    bounds: Bounds[],
    details: Details
}
interface Price {
    amount: number,
    currency: string
}
interface Bounds {
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
interface Details {
    remainingNumberOfSeats: number,
    seatPitch: number,
    freeBaggageAllowed: boolean,
    cabinClass: string
}
