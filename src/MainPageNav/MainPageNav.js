import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../logo.png'
const MainPageNav = () => {
    const history = useHistory()
    return (
        <div className="container pt-3">
            <Navbar expand="lg">
                <NavLink to="/" className="d-flex text-decoration-none">
                    <div>
                        <img style={{ width: '100px', heigth: '56px' }} src={logo} alt="" />
                    </div>
                    <p className="mt-3 text-decoration-none">FoodScape</p>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Home</NavLink>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Our Team</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#contact-form">Contact Us</a>
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/servicelist"></NavLink>
                        <button className='btn px-5 mx-3 py-1 mb-2 bg-warning' style={{ borderRadius: '40px', fontWeight: 'bold' }} onClick={() => history.push('/signup')}>Sign Up</button>
                        <button className='btn px-5 mx-3 mb-2 py-2 bg-danger' style={{ borderRadius: '20px', fontWeight: 'bold' }} onClick={() => history.push('/login')}>Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainPageNav;