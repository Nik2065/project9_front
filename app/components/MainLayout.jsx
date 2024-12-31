import React, { Fragment, useState, useEffect } from 'react'
import {Container, Navbar, Nav, Dropdown, Form, Button, Row, Col, Table} from 'react-bootstrap'
import { BsHeartFill } from "react-icons/bs";
import { FaDoorOpen } from "react-icons/fa";
import { FaServer, FaUser  } from "react-icons/fa";

//import {getShortReport} from '../processors/ApiFunctions.jsx'


//import TopNavbar from './TopNavbar.jsx'
//import MainFooter from './MainFooter.jsx'
import { LinkContainer } from 'react-router-bootstrap'

import {GetAuthDataFromStorage} from '../processors/CommonFunctions.js'

export default function MainLayout({children}){

    const [userName, setUserName] = useState('');


    useEffect(() => {
    
      //проверяем есть ли авторизация,
      //получаем данные пользователя
      const authData = GetAuthDataFromStorage(false);
      if(authData){
        console.log({authData});
        setUserName(authData.username);
      }
    }, []);




    function UserMenu(){
      return(
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <span style={{fontSize:"0.8rem"}}>Вы вошли как: {userName}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>

        <LinkContainer to="/user">
            <Dropdown.Item >
              <FaUser /> Профиль
              </Dropdown.Item>
          </LinkContainer>

          <LinkContainer to="/">
            <Dropdown.Item  >
              <FaDoorOpen /> Выйти
              </Dropdown.Item>
          </LinkContainer>
        </Dropdown.Menu>
        </Dropdown>
      )
    }


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
        {
          userName ? 
          <>
            <Row>
            <Col>
            <LinkContainer to="/fa">
              <Button variant="primary"> <BsHeartFill /> Избранное </Button>
            </LinkContainer>
            </Col>
            <Col>
            <UserMenu/>
            </Col>
            </Row>
          </>
          :
          <>
            <LinkContainer to="/signin">
              <Button variant="primary"><FaDoorOpen /> Войти</Button>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer title="Создать аккаунт" to="/signup">
              <Button variant="primary"><FaDoorOpen /> Регистрация</Button>
            </LinkContainer>
          </>
        }

          </Col>
        </Row>
      </Form>
      </Container>

    </Navbar>

    </header>


    <main style={{minHeight:"200px", paddingBottom:"70px"}}>
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


