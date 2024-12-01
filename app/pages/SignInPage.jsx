import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, FormGroup, FormText    } from 'react-bootstrap';



import MainLayout from '../components/MainLayout.jsx'




export default function SignInPage(){


    function SignInFields(){
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
    
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
        <Card.Title>Вход в личный кабинет</Card.Title>
        <Card.Text>Введите данные для входа в личный кабинет</Card.Text>
        <SignInFields/>


        </Card.Body>
        </Card>

        </Col>
        </Row>

        </Container>
        </MainLayout>
    )
}