import { Card, CardContainer } from "./styles";

export function TripCard(props) {
    return (
        <CardContainer>
            {props.trips.map((trip) => {
                return (
                    <Card key ={trip.id}>
                        <div>
                            <h3>{trip.name}</h3>
                        </div>
                        <p><strong>Planeta:</strong> {trip.planet}</p>
                        <p><strong>Descrição:</strong> {trip.description}</p>
                        <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
                        <p><strong>Data de início:</strong> {trip.date}</p>
                    </Card>
                );
            })}
        </CardContainer>
    )
}