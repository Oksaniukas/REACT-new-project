import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
   let navigate = useNavigate()

   let [loginFormData, setLoginFormData] = useState(
      {
        userName: '',
        password: '',  
      }
   );

   let correctDataLogin = {
      userName: 'Fotoakordai',
      password: '123',  
   }
   
   function handleChange(event) {
      const {name, value} = event.target;
  
      setLoginFormData(prev => {
        return {
          ...prev,
          [name]: value
        }
      })
   }
  
   function checkLoginForm(event) {
      event.preventDefault();

      if (loginFormData.userName !== '' && loginFormData.password !== '') {
         checkLoginData();
      } else {
         alert('Please fill the form')
      }
   }

   function checkLoginData() {
      if (loginFormData.userName !== correctDataLogin.userName || loginFormData.password !== correctDataLogin.password) {
         alert("Password/Username error");
      } else {
         navigate('/')
      }
   }

   function newUserForm() {
      navigate('/login/newuser')
   }
     
   return (
      <div className="login-page" >
         <form onSubmit={checkLoginForm} >
            <label className="login-page__label">Prisijungimo vardas:
            <input
               type='text'
               placeholder="userName"
               className="login-page__input-item"
               onChange={handleChange}
               name="userName"
               value={loginFormData.userName}
            />
            </label>
            <label className="login-page__label">Slaptažodis:
            <input
               type='password'
               placeholder="password"
               className="login-page__input-item"
               onChange={handleChange}
               name="password"
               value={loginFormData.password}
            />
            </label>
            <button className="login-page__button" >
               Prisijungti
            </button>
         </form>
         <div className="login-page__new-user">
            <div className="login-page__new-user-text">Naujo vartotojo registravimas:</div>
            <button onClick={newUserForm} className="login-page__button" >
               Registruotis
            </button>
         </div>
      </div>
   )
}

export { LoginPage }