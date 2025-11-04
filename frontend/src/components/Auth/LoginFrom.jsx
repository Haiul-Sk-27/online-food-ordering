import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((store) => store.auth);

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: "3rem" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Formik>

      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don’t have an account?{" "}
        <Button onClick={() => navigate("/account/register")}>Register</Button>
      </Typography>
    </div>
  );
};

export default LoginForm;