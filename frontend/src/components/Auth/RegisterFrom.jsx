import React from "react";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Welcome:", values);
    dispatch(registerUser({userData:values,navigate}))
    // navigate("/account/login");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, handleChange }) => (
          <Form>
            {/* Full Name */}
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Email */}
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Password */}
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Role Dropdown */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                <MenuItem value="ROLE_RESTAURANT_OWNER">
                  Restaurant Owner
                </MenuItem>
              </Select>
            </FormControl>

            {/* Submit Button */}
            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?{" "}
        <Button onClick={() => navigate("/account/login")}>Login</Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;