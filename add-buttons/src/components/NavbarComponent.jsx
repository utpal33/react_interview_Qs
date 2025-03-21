import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar expand='lg' bg="primary" className='bg-body-p' collapseOnSelect>
      <Container>
        <Navbar.Brand href='#home'>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='navigation-items' />
        <Navbar.Collapse id='navigation-items'>

          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#Links'>Link</Nav.Link>
            <NavDropdown title='Links'>
              <NavDropdown.Item href='#item1'> item1</NavDropdown.Item>
              <NavDropdown.Item href='#item2'>item2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="item3">item3</NavDropdown.Item>
              <NavDropdown.Item href='item4'>item4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='item5'>item5</Nav.Link>
            <Nav.Link href='item6'>item6</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='item7'>item7</Nav.Link>
            <Nav.Link href='item8'>item8</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default CollapsibleExample;