import React, {useState} from "react";
import {Container, Row, Col, Card, Form, Button, Alert} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import MainLayout from '../components/MainLayout.jsx'



export default function CreateProductPage(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState(0);

    const [cpu_id, setCpuId] = useState(0);
    const [gpu_id, setGpuId] = useState(0);

    const [alertData, setAlertData] = useState([true,'success','']);
    const [creatingProduct, setCreatingProduct] = useState(false);


    function sendDataToCreateProduct(){

    }


    return (
        <MainLayout>
    
        <Container>

       <Row>
        <Col xxl="8" lg="10" sm="12">
        
        
        <Card style={{marginTop:"20px"}}>
        <Card.Body>
        <Card.Title>Новое объявление</Card.Title>
        
        <Form>
        <Form.Group as={Row} controlId="c1">
            <Form.Label column sm="4">
            Заголовок
            </Form.Label>
            <Col sm="8">
            <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Компьютер i3 2300, gtx 1030" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="c2" style={{paddingTop:"10px"}}>
            <Form.Label column sm="4">
            Текст объявления
            </Form.Label>
            <Col sm="8">
            <Form.Control value={description} onChange={e=>setDescription(e.target.value)}  rows="6" as="textarea" type="text" placeholder="" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="c3" style={{paddingTop:"10px"}}>
            <Form.Label column sm="4">
            Цена
            </Form.Label>
            <Col sm="8">
            <Form.Control  value={cost} onChange={e=>setCost(e.target.value)}   type="number" placeholder="" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="c3" style={{paddingTop:"10px"}}>
            <Form.Label column sm="4">
                Процессор
            </Form.Label>
            <Col sm="8">
                <Form.Select  value={cpu_id} onChange={e=>setCpuId(e.target.value)} placeholder="" ></Form.Select>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} controlId="c3" style={{paddingTop:"10px"}}>
            <Form.Label column sm="4">
                Видеокарта
            </Form.Label>
            <Col sm="8">
                <Form.Select  value={gpu_id} onChange={e=>setGpuId(e.target.value)} placeholder="" ></Form.Select>
            </Col>
        </Form.Group>

        позже будет реализовано добавление фото
        </Form>

        <div style={{ paddingTop:"10px"}}>
        <Alert show={alertData[0]} dismissible="true" variant="success">fjsfkjh</Alert>
        </div>

        <div style={{textAlign:"right", paddingTop:"10px"}}>
            <Button onClick={()=> sendDataToCreateProduct()}>Создать</Button>
        </div>


        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}