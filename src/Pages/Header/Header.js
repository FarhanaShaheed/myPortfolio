import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import OffCanvas from '../Home/OffCanvas/OffCanvas';

const Header = () => {
    return (
        <Navbar style={{borderBottom:'5px solid white'}} variant="dark">
            <Container>
            <Navbar.Brand style={{fontFamily:"'Lobster', cursive",color:'aqua'}} className="fs-1" href="#home">Portfolio</Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link href="#home">
                <OffCanvas/>
            </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;