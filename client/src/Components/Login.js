import loginimage from "../Images/loginImage.jpg";
import "../App.css";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <img src={loginimage} className="loginsmall" />
    </div>
  );
};

export default Login;
