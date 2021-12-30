import { useState } from 'react'
import { omit } from 'lodash'


const useForm = (callback) => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});


    const validate = (event, name, value) => {
        debugger

        //A function to validate each input values
        switch (name) {
            case 'ID':
                debugger
                if (value.length === 0) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        [name]: 'ID is required fileds.'
                    })
                } else {
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                }
                break;
            case 'firstName':
                debugger
                if (value.length === 0) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        [name]: 'firstName is required fileds.'
                    })
                } else {
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                }
                break;
            case 'lastName':
                debugger
                if (value.length === 0) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        [name]: 'lastName is required fileds.'
                    })
                } else {
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                }
                break;

            case 'email':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        email: 'Enter are required fileds'
                    })
                }
                else {
                    if (
                        !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                    ) {
                        setErrors({
                            ...errors,
                            email: 'Enter a valid email address'
                        })
                    } else {

                        let newObj = omit(errors, "email");
                        setErrors(newObj);

                    }
                }
                break;
            case 'phone':
                if (
                    !new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(value)
                ) {
                    setErrors({
                        ...errors,
                        phone: 'Enter a valid phone number'
                    })
                } else {

                    let newObj = omit(errors, "phone");
                    setErrors(newObj);
                }
                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                }
                break;
            case 'confirmPassword':
                debugger
                if (value.localeCompare(values.password)) {
                    setErrors({
                        ...errors,
                        confirmPassword: 'Password & confirm password needs to have the same value.'
                    })
                } else {
                    let newObj = omit(errors, "confirmPassword");
                    setErrors(newObj);
                }
                break;

            default:
                break;
        }
    }

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        })

    }

    const handleSubmit = (event) => {
        debugger
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            alert("There is an Error!");
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    }
}

export default useForm