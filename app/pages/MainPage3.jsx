import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, Tabs, Tab   } from 'react-bootstrap';


//import { LinkContainer } from 'react-router-bootstrap';
//import {getLocalAuthData} from '../processors/auth'
import {searchComputers} from '../processors/ApiFunctions.js'


import MainLayout from '../components/MainLayout.jsx'
import ProductCard from '../components/ProductCard.jsx'
//import ProductCard5 from '../components/ProductCard5.jsx'
import MainPageFilter from '../components/MainPageFilter.jsx'

import FiltersSidebar from '../components/FiltersSidebar.jsx'
import ProductsList from '../components/ProductsList.jsx';


function MainPage3(){





  const [key, setKey] = useState('perfomancelevel');


    useEffect(() => {
      //const t = localStorage.getItem('token');
      //console.log({t});

    }, [])


    /*useEffect(() => {
      searchComputers(0, 5000)
      .then(resp => resp.json())
      .then((result) => {
        console.log({result});
      });
    }, [])*/

    function goToSearch(){

      const elementsInRow = 6;
      searchComputers(0, 5000, 6)
      .then(resp => resp.json())
      .then((result) => {

        console.log({result});

      });
    }


    return ( 
      <MainLayout>
	    <div style={{height:"30px"}}></div>
      {
        /* отступим сверху*/
      }

    <Container>
      <Row>
        <Col md={3} className="mb-4">
          <FiltersSidebar />
        </Col>
        <Col md={9}>
          <ProductsList />
        </Col>
      </Row>
    </Container>



    <Container>
      <Card>
        <Card.Body>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="perfomancelevel" title="Что такое 'класс производительноси'?">
        <h3>Класс производительности</h3>
        <p>
          Это величина, отражающая производительность процессора. Она основана на всем известном passmark.
          Но для простоты сравнивания и оценки производительности значения passmark поделены на "классы" по 3000 баллов в каждом
          Сравнить два компьютера с производительностью 4 и 5 намного проще чем в баллах. 
        </p>

      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>

              
    </Card.Body>
    </Card>


    
    </Container>
      {
          //<Container  style={{backgroundColor:""}}>
          //  <AdCarousel/>
          //</Container>
      }

    <Container style={{backgroundColor:""}}>
      <MainPageFilter search={goToSearch} />
    </Container>

      <Container>
       
      </Container>

    <Container>




      <Row>
        <Col sm="2">
          <ProductCard/>
        </Col>
        <Col sm="2">
          <ProductCard/>
        </Col>
        <Col sm="2">
          <ProductCard/>
        </Col>
        <Col sm="2">
          <ProductCard/>
        </Col>
        <Col sm="2">
          <ProductCard/>
        </Col>
        <Col sm="2">
          <ProductCard/>
        </Col>

      </Row>

      {
        //разбиваем полученные результаты на строки
      }

      
      </Container>
      <div style={{height:"30px"}}><hr/></div>
      {
        /**/
      }
      </MainLayout> 
      );


}

export default MainPage;


