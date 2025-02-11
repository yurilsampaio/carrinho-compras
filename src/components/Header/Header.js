import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import './styles.css'

function Header() {
    return (
        <Navbar className="custom-navbar" variant="dark" expand="lg">
            <Container className="justify-content-center">
                <Navbar.Brand className="navbar-brand" href="#home">Carrinho de Compras</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;