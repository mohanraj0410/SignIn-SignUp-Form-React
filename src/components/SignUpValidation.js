import * as yup from 'yup';

const passwordValidate = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

const basicSchema = yup.object().shape({
    name: yup.string().required("Enter your Name"),
    email: yup.string().matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, "Enter valid Email").email("Enter your valid Email")
        .required("Enter your Email"),
    password: yup.string().matches(passwordValidate, "Enter valid password").min(8, "Minimum 8 characters required for password")
        .required("Enter your password"),
    confirmpassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Re-enter your password"),
});


export default basicSchema;
