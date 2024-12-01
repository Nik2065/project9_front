import React, { Fragment, useState, useEffect } from 'react'
import {Container, Navbar, Nav, NavDropdown, Form, Button, Row, Col, Table} from 'react-bootstrap'
import { BsHeartFill } from "react-icons/bs";
import { FaDoorOpen } from "react-icons/fa";
import { FaServer  } from "react-icons/fa";

//import {getShortReport} from '../processors/ApiFunctions.jsx'


//import TopNavbar from './TopNavbar.jsx'
//import MainFooter from './MainFooter.jsx'
import { LinkContainer } from 'react-router-bootstrap'


export default function MainLayout({children}){




    useEffect(() => {
      

    }, []);

    return(
        <>
    <header>
    <Navbar className="navbar navbar-expand-lg bg-primary" >
        <Container  >
          <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <FaServer style={{color:"white"}} />
            <span style={{color:"white"}}>
            &nbsp;&nbsp; Compster
            </span>
          </Navbar.Brand>
          </LinkContainer>
        

        <Form>
        <Row>
          <Col xs="auto" style={{color:"white", fontSize:"1.2rem"}}>
            <LinkContainer to="/fa">
              <Button variant="primary"> <BsHeartFill /> Избранное </Button>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer to="/signin">
              <Button variant="primary"><FaDoorOpen /> Войти</Button>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer title="Создать аккаунт" to="/signup">
              <Button variant="primary"><FaDoorOpen /> Регистрация</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Form>
      </Container>

    </Navbar>

    </header>


    <main style={{minHeight:"200px"}}>
    {children}
    </main>



        <footer style={{position:"absolute", bottom:"0", width:"100%", height:"60px", lineHeight:"60px", backgroundColor:"grey", boxSizing:"border-box"}}>
          <Container>
          <p className='text-center'>SomeText</p>
          </Container>
        </footer>
        </>
    );

}


