import loginimage from "../Images/loginImage.jpg";
import "../App.css";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your Email"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter you password"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Button>Login</Button>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <p className="smalltext">
              No Account? <Link to="/register">Sign Up now.</Link>
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
