import Layout from "./../components/Layout";
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

const Login = () => {
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
            <Card>
              <CardHeader>
                <h3>Login Form</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Enter Your Email"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Enter password"
                      type="password"
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button className="bg-success">Login</Button>
                    <Button className="ms-2 bg-danger">Reset</Button>
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
