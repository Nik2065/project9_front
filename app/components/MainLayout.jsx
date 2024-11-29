import React, { Fragment, useState, useEffect } from 'react'
import {Container, Navbar, Nav, NavDropdown, Form, Button, Row, Col, Table} from 'react-bootstrap'
import { BsHeartFill } from "react-icons/bs";
import { FaDoorOpen } from "react-icons/fa";
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
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span style={{color:"white"}}>
            React Bootstrap
            </span>
          </Navbar.Brand>
        

        <Form>
        <Row>
          <Col xs="auto" style={{color:"white", fontSize:"1.2rem"}}>
            <LinkContainer to="/">
              <> <BsHeartFill /> Избранное </>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer to="/signin">
              <Button variant="primary"><FaDoorOpen /> Войти</Button>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer title="Создать аккаунт" to="/signup">
              <Button variant="primary"><FaDoorOpen /> Создать</Button>
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




        </>
    );

}


