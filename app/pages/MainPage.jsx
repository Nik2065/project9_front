import React, {useEffect, useState} from 'react';
import { Button, Form, Row, Col, Card, Container, Tabs, Tab   } from 'react-bootstrap';


//import { LinkContainer } from 'react-router-bootstrap';
//import {getLocalAuthData} from '../processors/auth'
import {searchComputers, GetMainPageProductsList} from '../processors/ApiFunctions.js'


import MainLayout from '../components/MainLayout.jsx'
//import ProductCard from '../components/ProductCard.jsx'
import MainPageFilter from '../components/MainPageFilter.jsx'

import FiltersSidebar from '../components/FiltersSidebar.jsx'
import ProductsList from '../components/ProductsList.jsx';


function MainPage(){






    //const [key, setKey] = useState('perfomancelevel');
    const [priceMin, setPriceMin] = useState('0');
    const [priceMax, setPriceMax] = useState('1000000');
    const [mpProductsList, setMpProductsList] = useState([]);


    useEffect(() => {
      //const t = localStorage.getItem('token');
      //console.log({t});

    }, [])


    useEffect(() => {

      let options = {
        priceMin: priceMin,
        priceMax: priceMax,
      }

      GetMainPageProductsList(options)
      .then(resp => resp.json())
      .then((result) => {
        console.log({result});
        if(!result.isError){
          setMpProductsList(result.Products)
        }


      });
    }, [])




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
          <ProductsList products={mpProductsList} />
        </Col>
      </Row>
    </Container>



    <Container>
      <br/>
      <Card>
        <Card.Body>
        <h3>Класс производительности</h3>
        <p>
          Это величина, отражающая производительность процессора. Она основана на всем известном passmark.
          Но для простоты сравнивания и оценки производительности значения passmark поделены на "классы" по 3000 баллов в каждом
          Сравнить два компьютера с производительностью 4 и 5 намного проще чем в баллах. 
        </p>              
        </Card.Body>
      </Card>

    </Container>


    <Container style={{backgroundColor:""}}>
      <MainPageFilter search={goToSearch} />
    </Container>



      <div style={{height:"30px"}}><hr/></div>
      {
        /**/
      }
      </MainLayout> 
      );


}

export default MainPage;


