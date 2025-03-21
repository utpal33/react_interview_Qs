import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const GridLayout = () => {
  return (
    <>
    <Container fluid>
        <Row>
            <Col className='bg-primary'>1 of 1 col</Col>
        </Row>
    </Container>
    <Container fluid="sm"> {/* lg >= 992 */}
      <Row>
          <Col className='bg-secondary'>1 of 2 col</Col>
          <Col className='bg-light'>2 of 2 col</Col>
          <Col className='bg-danger' xs={6}>2 of 2 col</Col>
        </Row>
    </Container>
    </>
    
  )
}

export default GridLayout