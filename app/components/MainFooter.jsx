import React from "react"
import { Row, Col, Container} from 'react-bootstrap';

export default function Footer() {
    return(
        <div style={{position:"fixed", left:"0", bottom:"0", width:"100%"}}>
        <Container fixed="true">

        <Row style={{minHeight:"50px"}}>
            <Col className="text-center" style={{backgroundColor:"#a0a0a0", paddingTop:"10px"}}>
            
            &copy; SlowChat 2023
            
            </Col>
        </Row>
        </Container>
        </div>
    );

}