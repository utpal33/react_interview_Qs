import React from 'react'
import { Container, FormControl, Nav, NavDropdown, Navbar, Form, Button, Badge, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' style={{height:'80px'}}>
      <Container className='gap-lg-5 gap-2'>
        <Navbar.Toggle aria-controls='navbar-items' className='order-1'/>
        <Navbar.Brand id='brand-logo' className='order-2'>
          <Nav.Link as={Link} to={'/'}>App Logo</Nav.Link>
        </Navbar.Brand>
        
        <Navbar.Collapse id='navbar-items' className='text-dark order-3'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/cart'} >ShoppingCart</Nav.Link>
            <NavDropdown title={'Products'}>
              <NavDropdown.Item  >Men</NavDropdown.Item>
              <NavDropdown.Item >women</NavDropdown.Item>
              <NavDropdown.Item >Kids</NavDropdown.Item>
              <NavDropdown.Item >Mellenials</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item >Genz</NavDropdown.Item>
              <NavDropdown.Item >Lux</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='d-flex justify-content-around gap-5'>
            <FormControl type='search' 
              aria-label='search' 
              placeholder='search products' 
              style={{width:"350px"}}/>
          </Nav>
          
        </Navbar.Collapse> 
        <Nav className='ms-auto order-4'>
          <Dropdown>
            <Dropdown.Toggle variant='success'>
              <Badge bg='transparent'>10</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu align='start'>
              <Dropdown.Item>cart is empty</Dropdown.Item> 
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

      </Container>
    </Navbar>

   
  )
}

export default Header