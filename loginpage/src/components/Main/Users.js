import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Container,
  CardSubtitle,
  Button,
} from "reactstrap";

const Users = ({ users }) => {
  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            {console.log("single users")}
            {console.log(Users)}
            <CardSubtitle>User name : {users.usersName} </CardSubtitle>
            <CardText>Users id : {users.usersId}</CardText>
            <CardText>Users email : {users.emailId}</CardText>
            <CardText>Users passowrd : {users.userspassword}</CardText>
            <CardText>Users contact : {users.contact} </CardText>
            <CardText>Users role : {users.role} </CardText>
          </CardBody>
          <CardBody>
            <Button>update user</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Users;
