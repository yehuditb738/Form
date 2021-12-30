import useForm from '../../src/Hooks/useForm'
import InputFiled from './InputFiled';
// import {
//     useNavigate
// } from 'react-router-dom';
import { useState } from 'react'
import WelcomePage from '../components/WelcomePage'
const Form = () => {
    const [isSubmit, setIsSubmit] = useState(false)
    //const navigate = useNavigate();

    //Final submit function
    const formLogin = () => {
        //navigate('/welcom')
        setIsSubmit(true)
    }

    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    debugger
    if (isSubmit === false)
        return (
            <form onSubmit={handleSubmit}>
                <h2>User Details:</h2>
                <InputFiled type="number" required name="ID" placeholder="*ID" onChange={handleChange} />
                {
                    errors.ID && <h3>{errors.ID}</h3>
                }
                <InputFiled type="text" required name="firstName" placeholder="*First Name" onChange={handleChange} />
                {
                    errors.firstName && <h3>{errors.firstName}</h3>

                }
                <InputFiled type="text" required name="lastName" placeholder="*Last Name" onChange={handleChange} />
                {
                    errors.lastName && <h3>{errors.lastName}</h3>

                }
                <InputFiled type="email" required name="email" placeholder="*E-mail" onChange={handleChange} />
                {
                    errors.email && <h3>{errors.email}</h3>
                }
                <InputFiled type="text" name="phone" placeholder="Phone" onChange={handleChange} />
                {
                    errors.phone && <h3>{errors.phone}</h3>
                }
                <InputFiled minLength='8' type="password" name="password" placeholder="Password" onChange={handleChange} />
                {
                    errors.password && <h3>{errors.password}</h3>
                }
                <InputFiled minLength='8' type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
                {
                    errors.confirmPassword && <h3>{errors.confirmPassword}</h3>
                }
                <input type="submit" value="Submit" className="submit" />
            </form>
        );
    else
        return <WelcomePage val={values} />
}
export default Form