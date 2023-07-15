import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Axios from '../config';
import { useNavigate } from 'react-router-dom';

const Login = () => {

 const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setLoggedin] = useState(false);

  const getLoginURL = {
    method: "POST",
    url: "userMST/login/"
  }

  const loginHandler = (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }
    const payload = {
      userName: username,
      password: password,
      system: 'admin'
    }

    console.log('payload', payload)

    Axios({ ...getLoginURL, data: payload }).then(resp => {
      console.log('resp', resp)
      localStorage.setItem("auth_token", resp.data.data.jwtToken);
      navigate("/company-mst");
    }).catch((e) => {
      console.log('e :>> ', e);
    }).finally(() => {
    })
  };

  return (
    <>
      <h3>Login</h3>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Form onSubmit={loginHandler}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="userName" className="mr-sm-2">
                      Email
                    </Label>
                    <Input
                      type="text" name="userName" onChange={(ev) => setUsername(ev.currentTarget.value)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="password" className="mr-sm-2">
                      Password
                    </Label>
                    <Input
                      type="password" name="password" onChange={(ev) => setPassword(ev.currentTarget.value)}
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">
                    Login
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login