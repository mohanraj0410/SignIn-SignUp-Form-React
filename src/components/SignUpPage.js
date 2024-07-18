import React, { useState } from 'react';
import { useFormik } from 'formik';
import basicSchema from './SignUpValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { addUserDetails } from './Store/userSlice';





const SignUpPage = () => {

    // const storeUserData = useSelector((store) => store.user.user)


    const [signUpUser, setSignUpUser] = useState([])


    let navigate = useNavigate()
    let dispatch = useDispatch()


    let filterString = localStorage.getItem("signUpUsers");
    let filter = JSON.parse(filterString);

    // if(storeUserData.length===0){
    //     dispatch(addUserDetails(filter))
    // }


    const onSubmit = (action, values) => {


        const updatedArray = [...signUpUser];
        updatedArray.push(action);

        setSignUpUser(updatedArray);


        let userData = localStorage.getItem("signUpUsers") || "[]";
        let filterUserData = JSON.parse(userData);

        filterUserData.push(action)
        console.log(filterUserData)


        if (!filterString) {
            console.log("if")
            localStorage.setItem('signUpUsers', JSON.stringify([...signUpUser, action]));
            message.open({
                type: 'success',
                content: 'Successfully signed up. Please log in here.',
            });
            navigate("/login")
            dispatch(addUserDetails(action))
        }


        else {
            for (let val of filter) {
                if (val.email.includes(action.email)) {
                    console.log("else for if")
                    message.open({
                        type: 'success',
                        content: 'User already exists. Please log in.',
                    });
                    navigate("/login")
                    return
                }


            }
            if (action.email) {
                console.log("llll")
                localStorage.setItem('signUpUsers', JSON.stringify(filterUserData));
                message.open({
                    type: 'success',
                    content: 'Successfully signed up. Please log in here.',
                });
                navigate("/login")
                dispatch(addUserDetails(filterUserData))
            }

        }

        dispatch(addUserDetails(filterUserData))

    };





    const { values, handleBlur, handleChange, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    // console.log(values);







    return (
        <div className='signup-maincontainer'>
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={errors.name && touched.name ? "input-err" : ""}
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {errors.name && touched.name ? (
                            <p className="error">{errors.name}</p>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={errors.email && touched.email ? "input-err" : ""}
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.email && touched.email ? (
                            <p className="error">{errors.email}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={errors.password && touched.password ? "input-err" : ""}
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.password && touched.password ? (
                            <p className="error">{errors.password}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            name="confirmpassword"
                            value={values.confirmpassword}
                            className={errors.confirmpassword && touched.confirmpassword ? "input-err" : ""}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        // required
                        />
                        {errors.confirmpassword && touched.confirmpassword ? (
                            <p className="error">{errors.confirmpassword}</p>
                        ) : (
                            ""
                        )}
                    </div>

                    <div>

                        <p className='loginchange'>

                            Already registered? <a onClick={() => navigate("login")}>Log In</a> Now
                        </p>

                    </div>
                    <br></br>

                    <button disabled={false} type="submit" className="btn-signup">Sign Up</button>


                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
