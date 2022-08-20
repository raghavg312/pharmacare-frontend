import React from "react";
import { Link } from "react-router-dom";
import { Button,Container,Card,Input,Form,FormGroup,Row,Col } from "reactstrap";

const Login=() => {

    return (
        <div className="login cente">
        <Row>
        <Col md={4}></Col>
        <Col md={4}>
        <Container>
        <Card className="p-4" color="secondary">
            <Form>
                <FormGroup>
                <label >Email</label>
                <Input type="email" placeholder="Enter Email Id" id="Email" name="Email"></Input>
                <label>Password</label>
                <Input type="password" placeholder="Enter Password" id="Pass" name="pass"></Input>
                <Button color="dark">login</Button>
                <Link to="/createUser"><Button color="dark">Register</Button></Link>
                </FormGroup>
            </Form>
            
        </Card>
        </Container>
        </Col>
        <Col md={4}></Col>
        </Row>
        </div>
    )
}

export default Login 