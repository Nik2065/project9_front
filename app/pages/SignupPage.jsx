import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, Tabs, Tab, FormGroup, FormText   } from 'react-bootstrap';



import MainLayout from '../components/MainLayout.jsx'




export default function SignupPage(){




function SignupFields(){
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Телефон</Form.Label>
            <Form.Control type="text" placeholder="+7XXX-XXXXXXX" />
        </Form.Group>
        <FormGroup>
            <FormText>Сформированный пароль придет на зарегистированную почту. До публикации объявлений номер телефона нужно будет так же подтвердить</FormText>
        </FormGroup>

        <br/>

        <Button variant="primary" type="submit">
            Отправить
        </Button>
        </Form>
    )
}











    return (
        <MainLayout>
    
        <Container>

       <Row>
        <Col xxl="8" lg="10" sm="12">
        
        
        <Card style={{marginTop:"20px"}}>
        <Card.Body>
        <Card.Title> SignupPage</Card.Title>
        <SignupFields/>


        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}    