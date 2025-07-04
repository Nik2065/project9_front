import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {Container, Row, Col, Card, Table, Button, Spinner, Tabs, Tab, Form} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import MainLayout from '../components/MainLayout.jsx'
import {GetUserProductsList} from '../processors/ApiFunctions.js'
import {ConvertDtToString} from '../processors/CommonFunctions.js'
import { FaPen } from "react-icons/fa";

import { CPagination } from "../components/CPagination/CPagination.jsx";

//профиль пользователя
export default function UserPage(){

    const [productList, setProductList] = useState([]);
    const [listLoadAnimation, setListLoadAnimation] = useState(false);
    const [paginationData, setPaginationData] = useState({ItemsCount:0,PagesCount:0, 
                                                            HasPrev:false, HasNext:false 
                                                            });

    
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get('page') == null ? 1 : searchParams.get('page');

    useEffect(() => {

        goToSearch(1);


    },[]);



    function goToSearch(localPage) {
        setProductList([]);

        setListLoadAnimation(true);
        if(localPage == undefined) localPage = 1;

        const options = {page: localPage};

        GetUserProductsList(options)
        .then(resp => resp.json())
        .then(res => {
            console.log({res});
            setListLoadAnimation(false);
            
            if(!res.isError){
                setProductList(res.products);
                setPaginationData({ItemsCount:res.totalCount, PagesCount: res.pagesCount, 
                    HasPrev: res.hasPreviousPage, HasNext: res.hasNextPage 
                    });
            }
        })
        .catch(error => {
            setListLoadAnimation(false);
            console.log(error);
        }); 

    }

    return (
        <MainLayout>
    
        <Container>

       <Row>
        <Col xxl="12" lg="12" sm="12">
        
        
        <Card style={{marginTop:"20px"}}>
        <Card.Body>
        <Card.Title><h3>Страница пользователя</h3></Card.Title>
        <Row>
            <Col>
            <h4>Объявления</h4>
            </Col>
            <Col sm="4">
                <LinkContainer to="/newproduct">
                <Button variant="secondary">Создать объявление</Button>
                </LinkContainer>
            </Col>
        </Row>
        <div>&nbsp;</div>

        {
            listLoadAnimation ?
            <div style={{textAlign:"center", height:"100px"}}>
                <br/>
                <br/>
            <Spinner   />
            </div>
            :
            <Tabs defaultActiveKey="act" className="mb-3" fill   style={{backgroundColor:"lightgrey"}}>
            
            <Tab eventKey="act" title="Активные">
            <Table bordered style={{fontSize:"1.2em"}} >

                <tbody>
                {
                    productList.map((item) => {
                        //console.log({item});
                        
                        const dt = new Date(item.createdDate);
                        const newDt = ConvertDtToString(dt);

                        return (
                            <tr key={item.id}>
                                <td>
                                    
                                    <div><span style={{color:"grey"}}>Заголовок:</span>{item.title}</div>
                                    <div>
                                        <span style={{color:"grey"}}>Текст объявления:</span><br/>
                                        <Form.Control 
                                        as="textarea" rows={3} 
                                        value={item.description}
                                        readOnly
                                        style={{fontSize:"1.2rem"}}
                                        ></Form.Control>
                                    </div>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                        <Card.Body>
                                            
                                        </Card.Body>
                                    </Card>


                                    <br/>
                                    <br/>
                                    <div>
                                    <span style={{color:"grey"}}>Добавлено:{newDt}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <small style={{color:"grey"}}>#{item.id}</small>
                                    </div>
                                    <br/>
                                </td>
                                <td>
                                    <LinkContainer to="/">
                                    <Button variant="link"> <FaPen style={{fontSize:"1.2rem"}} /> </Button>
                                    </LinkContainer>
                                </td>
                                
                            </tr>
                        )
                     })
                }
                </tbody>
            </Table>
            <div>
                <CPagination
                paginationData={paginationData}
                goToSearch={goToSearch}
                setSearchParams={setSearchParams}
                page={page}
                />
            </div>
            </Tab>
            <Tab eventKey="draft" title="Черновики">

            </Tab>

            <Tab eventKey="closed" title="Закрыты">

            </Tab>
            </Tabs>

        }
        </Card.Body>
        </Card>

        </Col>
        </Row>

    </Container>
    </MainLayout>
    )
}



