import Layout from "./../components/Layout";
import { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <Container fluid="md" className="my-3">
        <Row>
          <Col
            md={{
              offset: 3,
              size: 6,
            }}
          >
            <Card>
              <CardHeader>
                <h3>Registration Form</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="fullName">Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter Your Full Name"
                      type="text"
                      value={data.name}
                      onChange={(e) => handleInput(e, "name")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Your Email"
                      type="email"
                      value={data.email}
                      onChange={(e) => handleInput(e, "email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Enter password"
                      type="password"
                      value={data.password}
                      onChange={(e) => handleInput(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button className="bg-success">Register</Button>
                    <Button className="ms-2 bg-danger" onClick={resetData}>
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Registration;
