import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const history = useNavigate()

    const [data,setData] = useState([]);

    const [inputValue, setInputValue] = useState({
        email:"",
        password:'',
        confirmPassword:''
    })

    console.log(inputValue);
const getData = (e) => {
        const {value, name} = e.target

        setInputValue(()=> {
            return {
                ...inputValue,
                [name]:value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const {  email, password } = inputValue;
        if (email === "") {
            alert('email field is required')
        }else if (!email.includes("@")) {
            alert('plz enter valid email address')
        }else if (password === "") {
            alert('password field is requred')
        }else if (password.length < 5) {
            alert('password length greater five')
        } else{
            localStorage.setItem("userKey",JSON.stringify([...data,inputValue]));
            history('/login')
        }   
        

    }
  return (
    <div>
        <h1>SignUp</h1>
        <form action="" onSubmit={submitHandler}>
             <babel>EMAIL : </babel>
            <input type="email" name='email' onChange={getData} placeholder='email..' /><br /><br />
            <babel>PASSWORD : </babel>
            <input type="password" name='password' onChange={getData}  placeholder='password..' /><br /><br />
            <babel>CONFIRM PASSWORD : </babel>
            <input type="password" name='confirmPassword' onChange={getData}  placeholder='confirm password..' /><br /><br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Home