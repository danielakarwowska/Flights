import React from "react"
import { Grid, Image } from "semantic-ui-react"
import { Flights } from '../../../types'

type Props = {
    flights: string[] 
}
const Flight = ({flights}: Props) => {
    return (
        <main>
            <article className="flight_box">
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </article>
        </main>
    )
}
export default Flight