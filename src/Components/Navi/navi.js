import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navi = () => {
    return (

        <Navbar sticky="top"  className="nav-override">
            {/* <Container > */}
                <Nav className="" as="ul">
                    <Nav.Item as="li" className="mr-2">
                        <Nav.Link as={Link} to='/bio' className='links'>Bio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mr-2">
                        <Nav.Link as={Link} to='/contact' className='links'>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mr-2">
                        <Nav.Link as={Link} to="/portfolio" className='links'>Portfolio</Nav.Link>
                    </Nav.Item>
                </Nav>
            {/* </Container> */}
        </Navbar>

    )
};

export default Navi