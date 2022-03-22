import { Card, Button } from "react-bootstrap";
const Cards = props => {
    return (
        <Card className='card-override mt-2 mb-2'>
            <Card.Body >
                <Card.Title>{props.title}</Card.Title>
                <Card.Img variant="top" src={props.pic} />
                <div className="d-grid gap-2 pt-2">
                    <Button variant="secondary" href={props.github} blockl>Inspect the code!</Button>
                    {props.deployed ? <Button variant="secondary" href={props.deployed} block>Deployed!</Button> : ""}
                </div>
            </Card.Body>
        </Card>

    )
}

export default Cards;