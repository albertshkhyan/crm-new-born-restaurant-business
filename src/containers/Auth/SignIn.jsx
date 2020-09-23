import React, { useState } from "react";

import { Formik } from "formik";
import { validationSignIn } from "./authValidation";

import { useDispatch } from "react-redux";

import { loginAC } from "actions/userActions";

import {
  Grid,
  Paper,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import classes from "./style.module.css";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit =  (values, actions) => {
    // console.log("SignIn+++++++++++++++++++++values", values);
    dispatch(loginAC(values));  
    actions.setSubmitting(false); //disabled={isSubmitting}
  };

  return (
    <div className={`${classes.authCcontainer} flexible`}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSignIn}
      >
        {(props) => {
          const {
            errors,
            values,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldTouched,
          } = props;
          const change = (name, e) => {
            e.persist(); //e - synteteicEvetn - persist() should be called to remove the current event from the pool
            handleChange(e); //will update value of input
            setFieldTouched(name, true, false); //Set the touched state of a field imperatively.
          };
          const textFields = [
            {
              id: 1,
              required: true,
              type: "email",
              name: "email",
              label: "Email",
              variant: "outlined",
              placeholder: "Email",
              value: values.email,
              className: classes.textFieldP,
              error: !!(errors.email && touched.email),
              onChange: change.bind(null, "email"),
              helperText: touched.email ? errors.email : "",
            },
            {
              id: 2,
              required: true,
              type: showPassword ? "text" : "password",
              name: "password",
              label: "Password",
              variant: "outlined",
              placeholder: "Password",
              value: values.password,
              className: classes.textFieldP,
              error: !!(errors.password && touched.password),
              onChange: change.bind(null, "password"),
              helperText: touched.password ? errors.password : "",
              InputProps: {
                autoComplete: "off",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
          ];
          return (
            <Paper className={classes.paper}>
              <Grid container>
                <form
                  onSubmit={handleSubmit}
                  className={`${classes.formContainer} flexible vertical j-center j-between grow"`}
                >
                  <Typography
                    className={classes.titlSignIn}
                    variant="subtitle1"
                    component="h3"
                  >
                    Войти в систему
                  </Typography>
                  {textFields.map(({ id, ...restT }) => (
                    <TextField key={id} {...restT} />
                  ))}

                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={isSubmitting}
                    className={`${classes.btnM} modal-action btn waves-effect`}
                  >
                    Войти
                  </Button>
                </form>
              </Grid>
            </Paper>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
