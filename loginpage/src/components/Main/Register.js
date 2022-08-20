import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Input,
  Col,
  Row,
  FormGroup,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../api's/base_url";

const Register = () => {
  const [Users, setUsers] = useState({});

  const handleForm = (e) => {
    console.log(Users);
    AddUser(Users);
    e.preventDefault();
  };

  const AddUser = (data) => {
    axios.post(`${baseUrl}/createUser`, data).then(
      (response) => {
        alert("You are Registered. An mail has been send to your mail");
        console.log("response");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <div className="register my-2">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Container>
            <Card className="p-4" color="secondary">
              <Form onSubmit={handleForm}>
                <FormGroup>
                  <label>Name</label>
                  <Input
                    type="text"
                    placeholder="Enter Full Name"
                    id="Name"
                    name="userName"
                    onChange={(e) => {
                      setUsers({ ...Users, userName: e.target.value });
                    }}
                  ></Input>
                  <Row>
                    <Col md={6}>
                      <label>Email</label>
                      <Input
                        type="email"
                        placeholder="Enter Email Id"
                        id="Email"
                        name="userEmail"
                        onChange={(e) => {
                          setUsers({ ...Users, userEmail: e.target.value });
                        }}
                      ></Input>
                    </Col>
                    <Col md={6}>
                      <label>Password</label>
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        id="Password"
                        name="userPassword"
                        onChange={(e) => {
                          setUsers({ ...Users, userPassword: e.target.value });
                        }}
                      ></Input>
                    </Col>
                  </Row>
                  <label>Contact</label>
                  <Input
                    type="text"
                    placeholder="Enter Contact Number"
                    id="Contact"
                    name="userContact"
                    onChange={(e) => {
                      setUsers({ ...Users, userContact: e.target.value });
                    }}
                  ></Input>
                  <label>Role</label>
                  <Input
                    type="select"
                    id="role"
                    name="userRole"
                    placeholder="select role"
                    onChange={(e) => {
                      setUsers({ ...Users, userRole: e.target.value });
                    }}
                  >
                    <option value="DOCTOR">Doctor</option>
                    <option value="ADMIN">Admin</option>
                  </Input>

                  <Button color="dark" type="submit">
                    Register
                  </Button>
                  <Link to="/">
                    <Button color="dark">Login</Button>
                  </Link>
                </FormGroup>
              </Form>
            </Card>
          </Container>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default Register;
