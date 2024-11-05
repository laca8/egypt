import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/user/userAction";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, FormText, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const RegisterScreen = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
  const { loading, error, userInfo } = userRegisterReducer;
  useEffect(() => {
    if (userInfo) {
      navigator("/");
    }
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: "60px" }}>
        <Col xs={12} md={6}>
          <h1>Sign Up</h1>
          {loading && <Loader />}
          {error && <Error error={error} />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                style={{ fontWeight: "bold" }}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: "10px" }}
            >
              Register
            </Button>
          </Form>
          <div style={{ marginTop: "10px" }}>
            Have an Account ? <Link to={"/login"}>Sign In</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterScreen;
