import React from 'react';
import { Navbar, Nav, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
import logo from '../images/logo.svg';
import { IoPersonOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
 

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header-navbar">
 <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    alt="Brand Logo"
                    width="30" 
                    height="30" 
                    className="d-inline-block align-top"
                />   
            </Navbar.Brand>
        </Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <DropdownButton id="dropdown-basic-button" title="Shop">
            <Dropdown.Item href="#action/3.1">Category 1</Dropdown.Item>
            <Dropdown.Item href="#action/3.2">Category 2</Dropdown.Item>
            <Dropdown.Item href="#action/3.3">Category 3</Dropdown.Item>
          </DropdownButton>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Form inline className="search-bar">
          <FormControl type="text" placeholder="What are you looking for?" className="mr-sm-2" />
          <button className="search-button" type="submit">
            <FaSearch />
          </button>
        </Form>
        <Nav className="icons-bar">
          <Nav.Link href="#wishlist"><FaHeart /></Nav.Link>
          <Nav.Link href="#cart"><FaShoppingCart /></Nav.Link>
          <Dropdown alignRight>
            <Dropdown.Toggle as={FaUser} id="profile-dropdown">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#manage-account"><IoPersonOutline />Manage My Account</Dropdown.Item>
              <Dropdown.Item href="#manage-orders"><LuShoppingBag />Manage Orders</Dropdown.Item>
              <Dropdown.Item href="#my-cancellations"><MdOutlineCancel />My Cancellations</Dropdown.Item>
              <Dropdown.Item href="#my-reviews"><MdOutlineStarBorderPurple500 />My Reviews</Dropdown.Item>
              <Dropdown.Item href="#logout"><TbLogout2 />Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
