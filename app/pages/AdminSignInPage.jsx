import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, Alert   } from 'react-bootstrap';


import SignInLayout from '../components/SignInLayout.jsx'

import { GetToken } from '../processors/ApiFunctions.js';


export default function AdminSignInPage(){


    function AdminSignInFields(){
        
        
    const [email, setEmail] = useState('admin@mail.ru');
    const [password, setPassword] = useState('123');
    const [alertData, SetAlertData] = useState([false, 'success', '' ]);

    function SendDataToGetToken(){
    
        GetToken(email, password)
        .then(authResult => {
            console.log({authResult});
            if(authResult.success){
                localStorage.setItem('token', JSON.stringify(authResult));
                //переходим на главную страницу
                window.location.href = '/';
            }
            else
                localStorage.removeItem('token');
        });

        /*.then(resp => resp.json())
        .then((result) => {
            console.log({result});

            if(!result.isError){
                //SetAlertData([true, 'success', result.message + '\r\n Перейдите на страницу входа' ])
                //если успешно получили токен - то сохраняем его в локалсторадж и переходим на страницы сайта 
                
            }
            else{
                SetAlertData([true, 'warning', result.message ])
            }

            
        })
        .catch((error) => {
            console.log({error});
            SetAlertData([true, 'warning', 'Ошибка при создании пользователя'])
        });*/
    
    
    }



        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="Password" />
            </Form.Group>
    
            <br/>
    
            <Button onClick={SendDataToGetToken} variant="primary" type="button">
                Отправить
            </Button>
            <Button variant='default' onClick={() => {
                /*const exp =  new Date();
                const t = localStorage.getItem('token');
                if(t)
                    exp = e.expires;

                console.log(exp);
                if(exp)
                {
                    const end = moment(exp);
                    const start = new Date();
                    //const duration = moment.duration(end.diff(start));
                    const duration = end.diff(start, 'second');

                    console.log(duration);
                }*/

            }}>click</Button>

            <br/><br/>
            <Alert variant={alertData[1]} show={alertData[0]} onClose={()=>SetAlertData([false,'',''])} dismissible>
                {alertData[2]}
            </Alert>
            </Form>
        )
    }

    

    return (
        <SignInLayout>
        <Container>
        
        <Row>
        <Col xxl="8" lg="10" sm="12">
        
        
        <Card style={{marginTop:"20px"}}>
        <Card.Body>
        <Card.Title>Вход в личный кабинет администратора</Card.Title>
        <Card.Text>Введите данные для входа</Card.Text>
        <AdminSignInFields/>


        </Card.Body>
        </Card>

        </Col>
        </Row>

        </Container>
        </SignInLayout>
    )
}