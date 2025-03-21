import React, { useState } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const AlertToaster = () => {
    const [show, setShow] = useState(true)
    return (
        <div>
        <Container fluid='md'>
            <Row>
                <Col>
                {
                    // [
                    //     'primary',
                    //     'secondary',
                    //     'success',
                    //     'danger',
                    //     "warning",
                    //     'info',
                    //     'light',
                    //     'dark',
                    // ].map(variant => 
                            <Alert  show={show} variant='primary' dismissible onClose={()=>setShow(false)}>
                                <Alert.Heading>{`this is primary alert Toaster`}</Alert.Heading>
                                <Alert.Link>example link</Alert.Link>
                            </Alert>
                        // )
                } 
                </Col>
            </Row>   
        </Container>
        {!show && <Button variant='primary' onClick={()=>setShow(true)}>open</Button>}
        </div>  
    )
    }

export default AlertToaster