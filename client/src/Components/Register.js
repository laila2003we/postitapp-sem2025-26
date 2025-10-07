import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useSelector } from "react-redux";
//For form validation using react-hook-form

const Register = () => {
  const userList = useSelector((state) => state.users.value);

  const {
    register,

    handleSubmit, // Submit the form when this is called

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data);
    alert("Validation all good."); // You can handle the form submission here
  };
  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input type="text" name="name" {...register("name")}></input>
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input type="email" name="email" {...register("email")}></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password")}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword")}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      {/* <Row>
        <Col md={6}>
          <h1>List of Users</h1>
          <table className="table">
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row> */}
      <Row>
        <Col md={6}>
          <h2>List of Usres</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <td>Name</td>
                <td>Password</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.password}</td>
                  <td>
                    <Button>Update</Button>
                  </td>
                  <td>
                    <Button>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
