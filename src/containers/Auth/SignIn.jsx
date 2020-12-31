import React, { useState } from 'react';

import { Formik } from 'formik';
import { validationSignIn } from './authValidation';

import { useDispatch } from 'react-redux';
import { loginAC } from 'app/actions/userActions';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// import classes from './style.module.css';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const SignIn = ({ classes }) => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleSubmit = (values, actions) => {
		dispatch(loginAC(values)); //give error because change of state occurd after that we do redirect, then we try change state in unmounted component - https://github.com/formium/formik/issues/2430
		// actions.setSubmitting(false); //disabled={isSubmitting} - give error
	};

	return (
		<div className={`${classes.authContainer} flexible`}>
			<Formik
				initialValues={{ email: '', password: '' }}
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
							type: 'email',
							name: 'email',
							label: 'Email',
							variant: 'outlined',
							placeholder: 'Email',
							value: values.email,
							className: classes.textField,
							error: !!(errors.email && touched.email),
							onChange: change.bind(null, 'email'),
							helperText: touched.email ? errors.email : '',
						},
						{
							id: 2,
							required: true,
							type: showPassword ? 'text' : 'password',
							name: 'password',
							label: 'Password',
							variant: 'outlined',
							placeholder: 'Password',
							value: values.password,
							className: classes.textField,
							error: !!(errors.password && touched.password),
							onChange: change.bind(null, 'password'),
							helperText: touched.password ? errors.password : '',
							InputProps: {
								autoComplete: 'off',
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
									<Typography className={classes.titlSignIn} variant="subtitle1" component="h3">
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

export default withStyles(styles)(SignIn);
