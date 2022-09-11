import Layout from "./../components/Layout";
import { useState } from "react";
import { signUp } from "./../services/UserService";
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
  FormFeedback,
} from "reactstrap";
import { toast } from "react-toastify";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
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

  const submitForm = (event) => {
    event.preventDefault();

    signUp(data)
      .then((res) => {
        console.log(res);
        console.log("Created Successfully");
        toast.success("Registration Successfully..");
        setError({
          errors: {},
          isError: false,
        });
        resetData();
      })
      .catch((error) => {
        console.log(error);
        console.log("Error");
        toast.error("Registration Failed..");
        setError({
          errors: error,
          isError: true,
        });
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
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="fullName">Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter Your Full Name"
                      type="text"
                      value={data.name}
                      onChange={(e) => handleInput(e, "name")}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Your Email"
                      type="text"
                      value={data.email}
                      onChange={(e) => handleInput(e, "email")}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
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
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
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
