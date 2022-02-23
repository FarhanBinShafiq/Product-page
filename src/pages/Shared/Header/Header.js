import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { MdSearch, MdPermIdentity,MdExpandMore, MdShoppingBag } from "react-icons/md";
import { ImHeart } from "react-icons/im";



const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='header'>
                <Container>

                    <Navbar.Brand as={HashLink} to="/home">
                        <Nav.Link as={HashLink} to="" className='logo'>FASHION CLUB</Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav  ">
                        <Nav className="header-nav">
                            <Nav.Link as={HashLink} to="">Men <MdExpandMore/> </Nav.Link>
                            <Nav.Link as={HashLink} to="">Women <MdExpandMore/> </Nav.Link>
                            <Nav.Link as={HashLink} to="">Kids <MdExpandMore/> </Nav.Link>
                            <Nav.Link as={HashLink} to="">Beauty</Nav.Link>
                            <div>
                                <Nav.Link as={HashLink} to=""><MdSearch /></Nav.Link>
                                <Nav.Link as={HashLink} to="/login"><MdPermIdentity /></Nav.Link>
                                <Nav.Link as={HashLink} to=""><ImHeart /></Nav.Link>
                                <Nav.Link as={HashLink} to="">< MdShoppingBag /></Nav.Link>
                            </div>





                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;