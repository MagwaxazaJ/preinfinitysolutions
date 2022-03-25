import React from "react";
// import './header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    // const [{basket,product}, dispatch] = useStateValue();

    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">PRE INFINITY SOLUTIONS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/products">PRODUCTS</Nav.Link>
                <Nav.Link href="/services">SERVICE</Nav.Link>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                <Nav.Link href="/contact">CONTACT</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

{/* <div className='header'>
<div className="header_log">
    <Link to='/'>
        <h2 className='header_logo'>PRE INFINITY SOLUTIONS</h2>
    </Link>
</div>
<div className='header__nav'>
    <Link to='/'>
        <div className='header__option'>
            <h5>HOME</h5>
        </div>
    </Link>

    <Link to='/products'>
        <div className='header__option'>
            <h5>PRODUCT</h5>
        </div>
    </Link>

    <Link to='/services'>
        <div className='header__option'>
            <h5>SERVICE</h5>
        </div>
    </Link>

    <Link to='/about'>
        <div className='header__option'>
            <h5>ABOUT US</h5>
        </div>
    </Link>

    <Link to='/contact'>
        <div className='header__option'>
            <h5>CONTACT US</h5>
        </div>
    </Link>

    {/* <Link to='/checkout'>
        <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
    </Link> */}

// </div>

// </div> */
