import React, { useState } from "react";

import { Formik } from "formik";
import { validationSignUp } from "./authValidation";

import { useDispatch } from "react-redux";
import { registerAC } from "actions/userActions";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import classes from "./style.module.css";

const SignUp = (props) => {
  console.log('props SignUp', props);
  // debugger
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  console.log("showPassword", showPassword);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values, actions) => {
    console.log("SignUp+++++++++++++++++++++++++++++values", values);
    dispatch(registerAC(values));
    actions.setSubmitting(false); //disabled={isSubmitting}
    props.history.push("/login?registered=true");
  };

  return (
    <div className={`${classes.authCcontainer} flexible`}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          last_name: "",
          confirm_password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSignUp}
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
              type: "text",
              name: "name",
              label: "First Name",
              variant: "outlined",
              placeholder: "First Name",
              value: values.name,
              className: classes.textFieldP,
              error: !!(errors.name && touched.name),
              onChange: change.bind(null, "name"),
              helperText: touched.name ? errors.name : "",
            },
            {
              id: 2,
              required: true,
              type: "text",
              name: "last_name",
              label: "Last Name",
              variant: "outlined",
              placeholder: "Last Name",
              value: values.last_name,
              className: classes.textFieldP,
              error: !!(errors.last_name && touched.last_name),
              onChange: change.bind(null, "last_name"),
              helperText: touched.last_name ? errors.last_name : "",
            },
            {
              id: 3,
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
              id: 4,
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
            {
              id: 5,
              required: true,
              type: showPassword ? "text" : "password",
              name: "confirm_password",
              label: "Confirm password",
              variant: "outlined",
              placeholder: "Confirm password",
              value: values.confirm_password,
              className: classes.textFieldP,
              error: !!(errors.confirm_password && touched.confirm_password),
              onChange: change.bind(null, "confirm_password"),
              helperText: touched.confirm_password
                ? errors.confirm_password
                : "",
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
                    Sign Up
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

export default SignUp;
