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
        <span style={{fontSize:"1.2rem"}}>Вы вошли как: {userName}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>

        <LinkContainer to="/user" style={{fontSize:"1.2rem"}}>
            <Dropdown.Item >
              <FaUser /> Профиль
              </Dropdown.Item>
          </LinkContainer>

          
            <Dropdown.Item style={{fontSize:"1.2rem"}} onClick={()=> {
              localStorage.removeItem('token');
              window.location.href = '/';
            }} >
              <FaDoorOpen /> Выйти
            </Dropdown.Item>
          
        </Dropdown.Menu>
        </Dropdown>
      )
    }


    return(
        <>
    <header>
    <Navbar className="navbar navbar-expand-lg bg-primary"   >
        <Container  >
          <LinkContainer to="/">
          <Navbar.Brand   >
            <FaServer style={{color:"white", fontSize:"1.5em", marginBottom:"10px"}} />
            <span style={{color:"white", fontSize:"1.5em"}}>
            &nbsp;&nbsp; Compster
            </span>
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
        {
          userName ? 
          <>
            <LinkContainer to="/fa" style={{fontSize:"1.2rem"}}>
              <Button variant="primary"> <BsHeartFill /> Избранное </Button>
            </LinkContainer>
            <UserMenu/>
          </>
          :
          <>
            <LinkContainer to="/signin" style={{fontSize:"1.2rem"}}>
              <Button variant="primary"><FaDoorOpen /> Войти</Button>
            </LinkContainer>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <LinkContainer title="Создать аккаунт" to="/signup" style={{fontSize:"1.2rem"}}>
              <Button variant="primary"><FaDoorOpen /> Регистрация</Button>
            </LinkContainer>
          </>
        }
      </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>


    <main style={{minHeight:"200px", paddingBottom:"70px", backgroundColor:"#cfcfcf"}}>
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


