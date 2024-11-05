import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { login } from "../../redux/actions/user/userAction";

const LoginScrenn = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { loading, error, userInfo } = userLoginReducer;

  useEffect(() => {
    if (userInfo) {
      navigator("/");
    }
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch login
    dispatch(login(email, password));
  };
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: "60px" }}>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {error && <Error error={error} />}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label> password </Form.Label>
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
              Sign In
            </Button>
          </Form>
          <div style={{ marginTop: "10px" }}>
            don`t have any Account ? <Link to={"/register"}>Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginScrenn;
