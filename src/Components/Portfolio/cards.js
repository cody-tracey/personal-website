import { Card, Button } from "react-bootstrap";
const Cards = props => {
    return (
        <Card>
            <Card.Body >
                <Card.Title>{props.title}</Card.Title>
                <Card.Img variant="top" src={props.pic} />
                <Card.Link href={props.github}>
                    <Button variant="primary">Inspect the code!</Button>
                </Card.Link>
                {props.deployed} ?
                <Card.Link href={props.deployed}>
                    <Button variant="primary">Deployed!</Button>
                </Card.Link> : ""
            </Card.Body>
        </Card>

    )
}

export default Cards;