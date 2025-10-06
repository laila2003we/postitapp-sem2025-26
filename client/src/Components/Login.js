import loginimage from "../Images/loginImage.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
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
    </div>
  );
};

export default Login;
