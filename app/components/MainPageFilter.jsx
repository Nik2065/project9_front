import React, {useState } from 'react';
import { Button, Form, Table, Row, Col, Tabs, Tab, Card} from 'react-bootstrap'
import compImage1 from '../images/computer_short.jpg'
import compImage2 from '../images/computer_middle.jpg'
import compImage3 from '../images/computer_hi.jpg'








export default function MainPageFilter(){


    const [key, setKey] = useState('office');


    return (
        <>
        <Form style={{borderBottom:"1px solid gray", marginBottom:"10px"}}>
        <Form.Group className="mb-3" style={{textAlign:"right"}}>

            <Form.Label inline="true">Простой фильтр</Form.Label>
            &nbsp;&nbsp;
            <Form.Check style={{fontSize:"1.5em"}} inline="true" // prettier-ignore
            type="switch"
            id="custom-switch"
            />
            
            <Form.Label inline="true">Сложный фильтр</Form.Label>
        </Form.Group>
        <Form.Group>
        </Form.Group>

    <Row>
    <Col sm="9">

    <Card>
    <Card.Body>


    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
      variant="pills"
    >
      <Tab eventKey="office" title="Офисный" >
        <Row>
        <Col sm="4">
            <Card style={{height:"350px" }}>
                    <div style={{height:"82px"}}>&nbsp;</div>

                    <div style={{margin:"0 auto"}}>
                    <img src={compImage1}  width="80px" />
                    </div>
                    <Card.Body style={{textAlign:"center"}} >
                        <Card.Title >
                        <div style={{marginLeft: "16px" }}>
                        <Form.Check style={{fontSize:"2rem"}} // prettier-ignore
                            type="radio"
                            inline
                        />
                        </div>
                        <div  style={{fontSize:"0.8em"}}>Базовая производительность</div>
                        <div style={{fontSize:"0.6em"}}>(класс производительности от 2 до 4х)</div>
                        </Card.Title>
                    </Card.Body>

            </Card>
        </Col>
        <Col sm="4">
            <Card style={{height:"350px"}}>
                    <div style={{height:"60px"}}>&nbsp;</div>

                    <div style={{margin:"0 auto"}}>
                    <img src={compImage2}  width="80px"   />
                    </div>
                    <Card.Body style={{textAlign:"center"}}>
                        <Card.Title  >
                        <div style={{marginLeft: "16px" }}>
                        <Form.Check style={{fontSize:"2rem"}} // prettier-ignore
                            type="radio"
                            inline
                        />
                        </div>
                        <div style={{fontSize:"0.8em"}}>Средняя производительность</div>
                        <div style={{fontSize:"0.6em"}}>(класс производительности от 5 до 7ми)</div>
                        </Card.Title>
                        </Card.Body>
                    </Card>
        </Col>
        
        <Col sm="4">
            <Card  style={{height:"350px"}}>
                <div style={{height:"28px"}}>&nbsp;</div>

                <div style={{margin:"0 auto"}}>
                <img src={compImage3}   width="80px"  />
                </div>
                <Card.Body style={{textAlign:"center"}}>
                        <Card.Title  >
                        <div style={{marginLeft: "16px" }}>
                        <Form.Check style={{fontSize:"2rem"}} // prettier-ignore
                            type="radio"
                            inline
                        />
                        </div>
                        <div style={{fontSize:"0.8em"}} >Высокая производительность</div>
                        <div style={{fontSize:"0.6em"}}>(класс производительности более 8ми)</div>
                </Card.Title>
                </Card.Body>
            </Card>
        </Col>

        </Row>
                    

          

      </Tab>
      <Tab eventKey="game" title="Игровой">
      
                Игровой
                Низкая производительность
                Средняя производительность
                Высокая производительность
            
      </Tab>
      <Tab eventKey="evaluate" title="Оценить мой компьютер" >
        Tab content for Contact
      </Tab>
    </Tabs>

    <div style={{textAlign:"center", paddingTop:"10px", paddingBottom:"10px"}}>
    <Button variant="danger" size='lg' style={{}}>Найти</Button>
    </div>

    </Card.Body>
    </Card>


    </Col>
    <Col sm="3">
        <Button style={{margin:"10px"}} variant='primary'>Lorem ipsum</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>dolor</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>sit amet</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>consectetur adipiscing elit</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>sed do eiusmod tempor incididunt</Button>&nbsp;

        <Button style={{margin:"10px"}} variant='primary'>Lorem ipsum</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>dolor</Button>&nbsp;
        <Button style={{margin:"10px"}} variant='primary'>sit amet</Button>&nbsp;
    </Col>
    </Row>


    </Form>
    </>
    )
}