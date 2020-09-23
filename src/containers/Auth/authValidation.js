import * as Yup from "yup";

export const validationSignIn = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Enter your email"),
  password: Yup.string()
    .required("Password must not be empty")
    .min(4, "password must be more than 4 characters")
    .max(24, 'Password can be maximum 24 characters')

});

export const validationSignUp = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Enter your email"),
  password: Yup.string()
    .required("Password must not be empty")
    .max(24, 'Password can be maximum 24 characters')
    .min(4, "password must be more than 4 characters"),
  name: Yup.string()
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Enter your name"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password's not match")
    .max(24, 'Password can be maximum 24 characters')
    .required("Required!"),

  // last_name: Yup.string().required("Enter your last name")
  //   .min(2, "Mininum 2 characters")
  //   .max(15, "Maximum 15 characters")
})
