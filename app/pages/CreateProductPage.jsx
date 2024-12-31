import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, Form, Button, Alert, Spinner} from 'react-bootstrap'
import { alertType } from "../const.js";

import MainLayout from '../components/MainLayout.jsx'
import SpinnerButton from "../components/SpinnerButton.jsx";
import {GetCpuList, GetGpuList, SendDataToCreateProduct} from '../processors/ApiFunctions.js'


export default function CreateProductPage(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState(0);

    const [cpuId, setCpuId] = useState(0);
    const [gpuId, setGpuId] = useState(0);

    const [cpulist, setCpulist] = useState([]);
    const [gpulist, setGpulist] = useState([]);
    const [alertData, setAlertData] = useState([false,alertType.success,'']);
    const [crProductAnimation, setCrProductAnimation] = useState(false);//индикатор загрузки

    useEffect(() => {
        GetCpuList()
        .then(resp => resp.json())
        .then(res => {
            console.log({res});

            if(!res.isError){
                if(res.cpuDtoList.length > 0){
                    setCpulist(res.cpuDtoList);
                    setCpuId(res.cpuDtoList[0].id);

                    console.log(res.cpuDtoList);
                    console.log(res.cpuDtoList[0].id);
                }
            }
        })
        .catch(error => {
            console.log(error)
        });

        GetGpuList()
        .then(resp => resp.json())
        .then(res => {
            if(!res.isError){
                if(res.gpuDtoList.length>0){
                    setGpulist(res.gpuDtoList);
                    setGpuId(res.gpuDtoList[0].id);
                    console.log(res.gpuDtoList);
                    
                    console.log(res.gpuDtoList[0].id);
                }
            }
        })
        .catch(error => {
            console.log(error)
        });


    },[]);
    





    function sendDataToCreateProduct(){

        setCrProductAnimation(true);

        SendDataToCreateProduct(title, description, cost, cpuId, gpuId)
        .then(resp => resp.json())
        .then(res => {
            console.log({res});

            setCrProductAnimation(false);

            if(!res.isError){
                setAlertData([true, alertType.success, res.message])
            }
            else
                setAlertData([true, alertType.warning, res.message]);
        })
        .catch(error => {
            setCrProductAnimation(false);
            console.log(error)
        });


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
                <Form.Select  value={cpuId} onChange={e=>setCpuId(e.target.value)} placeholder="" >
                    {
                        cpulist ? 
                        cpulist.map((item, k) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            );
                            
                        })
                        : ""
                    }
                    
                </Form.Select>
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} controlId="c3" style={{paddingTop:"10px"}}>
            <Form.Label column sm="4">
                Видеокарта
            </Form.Label>
            <Col sm="8">
                <Form.Select  value={gpuId} onChange={e=>setGpuId(e.target.value)} placeholder="" >
                {
                        gpulist ? 
                        gpulist.map((item, k) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            );

                        })
                        : ""
                    }

                </Form.Select>
            </Col>
        </Form.Group>

       
        </Form>

        <div style={{ paddingTop:"10px"}}>
        <Alert onClose={() => setAlertData([false, '', ''])} show={alertData[0]} dismissible="true" variant={alertData[1]}>{alertData[2]}</Alert>
        </div>

        <div style={{textAlign:"right", paddingTop:"10px"}}>
            <SpinnerButton showAnimation={crProductAnimation} disabled={crProductAnimation} onClick={()=> sendDataToCreateProduct()} />
        </div>


        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}