import React, { Fragment, useState, useEffect } from 'react'
import {Container, Navbar, Nav, NavDropdown, Form, Button, Row, Col, Table} from 'react-bootstrap'

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
          <Col xs="auto">
            <Button type="button" variant="secondary" >Войти</Button>
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


