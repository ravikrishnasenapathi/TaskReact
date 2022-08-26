import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();

  const [inputValue,setInputValue] = useState({
    email: "",
    password : ""
  })

  const [Data,setData]= useState([]);
 console.log(inputValue);
  
 const getData = (e) => {

  const {value,name} = e.target;

  setInputValue(() =>{
    return {
      ...inputValue,
      [name] : value
    }
  })
 }

  const handler = (e) => {
      e.preventDefault();
      const getuserArr = localStorage.getItem("userKey");
        console.log(getuserArr);
        const { email, password } = inputValue;
        if (email === "") {
          alert('email field is required')
      }else if (!email.includes("@")) {
          alert('plz enter valid email address')
      }else if (password === "") {
          alert('password field is requred')
      }else if (password.length < 5) {
          alert('password length greater five')
      } else {
       
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
            return el.email === email && el.password === password
        });

        if (userlogin.length === 0) {
            alert("invalid details")
          } else {
            console.log("user login succesfulyy");
            alert("user login succesfulyy")

            localStorage.setItem("userKey", JSON.stringify((userlogin)))

            history("/post")
        }
    }
}
  }


  
  return (
    <div>
      <form action= "" onSubmit={handler}>
        <h1>Login</h1>
        <babel>EMAIL : </babel>
        <input type="email" name="email" onChange={getData} placeholder='ENTER EMAIL'/><br /><br />
        <babel>PASSWORD : </babel>
        <input type="password" name="password" onChange={getData} placeholder='ENTER PASSWORD'/><br /><br />
        <button type='submit'>Submit</button>
        </form>
  </div>
  )
}

export default Login