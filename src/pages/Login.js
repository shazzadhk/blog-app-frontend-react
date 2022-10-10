import Layout from "./../components/Layout";
import { useState, useContext } from "react";
import { loginUser } from "../services/UserService";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { doLogin } from "../auth";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

const Login = () => {
  const contextData = useContext(UserContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputField = (event, field) => {
    let fieldValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: fieldValue,
    });
  };

  const resetLoginDetails = () => {
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    loginUser(loginDetails)
      .then((data) => {
        doLogin(data, () => {
          contextData.updateState(data, "login");

          // console.log(contextData.user.login);
          // console.log(contextData.user.data);

          navigate("/");
        });

        toast.success("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
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
            sm="12"
          >
            <Card className="shadow">
              <CardHeader>
                <h3>Login Form</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Your Email"
                      type="text"
                      value={loginDetails.email}
                      onChange={(e) => handleInputField(e, "email")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Enter password"
                      type="password"
                      value={loginDetails.password}
                      onChange={(e) => handleInputField(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button className="bg-success">Login</Button>
                    <Button
                      onClick={resetLoginDetails}
                      className="ms-2 bg-danger"
                    >
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

export default Login;
