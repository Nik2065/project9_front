import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, Tabs, Tab   } from 'react-bootstrap';



import MainLayout from '../components/MainLayout.jsx'






export default function MainPage2(){

return (
    <MainLayout>

    <Container>

    
    <Row style={{paddingTop:"10px"}}>
        <Col lg="2" sm="2">

        </Col>
        <Col lg="4" sm="4">
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col lg="4" sm="4">
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col lg="2" sm="2">
            
        </Col>
    </Row>
    </Container>

    </MainLayout>
)

}