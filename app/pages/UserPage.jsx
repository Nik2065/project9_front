import React from "react";
import {Container, Row, Col, Card, Table, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import MainLayout from '../components/MainLayout.jsx'



export default function UserPage(){


    return (
        <MainLayout>
    
        <Container>

       <Row>
        <Col xxl="8" lg="10" sm="12">
        
        
        <Card style={{marginTop:"20px"}}>
        <Card.Body>
        <Card.Title> Страница пользователя</Card.Title>
        <Row>
            <Col>
            <p>Объявления</p>
            </Col>
            <Col sm="4">
                <LinkContainer to="/newproduct">
                <Button variant="secondary">Создать объявление</Button>
                </LinkContainer>
            </Col>
        </Row>
        <Table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>

        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}