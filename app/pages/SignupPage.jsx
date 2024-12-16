import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container,  FormGroup, FormText   } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';



import MainLayout from '../components/MainLayout.jsx'


import {SendSignUpData} from '../processors/ApiFunctions.js'

export default function SignupPage(){




function SignupFields(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [alertData, SetAlertData] = useState([false, 'success', '' ]);

    function sendData(){
        //проверяем что пароли одинаковые 

        if(password.trim() !== password2.trim()) {
            SetAlertData([true, 'warning', "Пароли не совпадают"]);
            return;
        }

        SendSignUpData(email, password)
        .then(resp => resp.json())
        .then((result) => {
            console.log({result});

            if(!result.isError){
                SetAlertData([true, 'success', result.message + '\r\n Перейдите на страницу входа' ])
            }
            else{
                SetAlertData([true, 'warning', result.message ])
            }

            
        })
        .catch((error) => {
            console.log({error});
            SetAlertData([true, 'warning', 'Ошибка при создании пользователя'])
        });
    
    
    }


    return (
        <Form style={{paddingTop:"10px"}}>
        <Form.Group className="mb-3" controlId="c1">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="c2">
            <Form.Label>Пароль</Form.Label>
            <Form.Control value={password} onChange={(e)=>{
              //console.log(password);
              setPassword(e.target.value);
            }
            } type="password"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="c3">
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control value={password2} onChange={(e)=>{
              //console.log(password);
              setPassword2(e.target.value);
            }
            } type="password"  />
        </Form.Group>

        {
        //<FormGroup>
        //    <FormText>Сформированный пароль придет на зарегистированную почту. До публикации объявлений номер телефона нужно будет так же подтвердить</FormText>
        //</FormGroup>
        //<br/>
        }

        <Button onClick={sendData} variant="primary" type="button">
            Отправить
        </Button>
        <br/>
        <br/>
        <Alert key={alertData[1]} variant={alertData[1]} onClose={() => SetAlertData([false,'',''])} show={alertData[0]} dismissible>
        {alertData[2]}
        </Alert>
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
        <Card.Title> Страница регистрации нового пользователя</Card.Title>
        <SignupFields/>
        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}    