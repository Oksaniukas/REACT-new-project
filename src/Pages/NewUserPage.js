import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewUserPage() {
   let navigate = useNavigate()

   let [newUserFormData, setnewUserFormData] = useState(
      {
        userName: '',
        password1: '',
        password2: '',  
  
      }
   );

   function handleChange(event) {
      const {name, value} = event.target;
  
      setnewUserFormData(prev => {
        return {
          ...prev,
          [name]: value
        }
      })
   }

   function checkPasswordNewUser(event) {
      event.preventDefault();

      if (newUserFormData.userName !== '' && newUserFormData.password1 !== '' && newUserFormData.password2 !== '') {
         checkNewUserPasswordData();
      } else {
         alert('Please fill the form')
      }
   }

   function checkNewUserPasswordData() {
      if (newUserFormData.password1 !== newUserFormData.password2) {
         alert("Password error");
      } else {
         navigate('/')
      }
   }
     
   return (
      <div className="login-page" >
         <form onSubmit={checkPasswordNewUser} >
            <label className="login-page__label">Naujo naudotojo prisijungimo vardas:
            <input
               type='text'
               placeholder="userName"
               className="login-page__input-item"
               onChange={handleChange}
               name="userName"
               value={newUserFormData.userName}
            />
            </label>
            <label className="login-page__label">Sukurkite slaptažodį:
            <input
               type='password'
               placeholder="password"
               className="login-page__input-item"
               onChange={handleChange}
               name="password1"
               value={newUserFormData.password1}
            />
            </label>
            <label className="login-page__label"> Pakartokite slaptažodį:
            <input
               type='password'
               placeholder="repeat your password"
               className="login-page__input-item"
               onChange={handleChange}
               name="password2"
               value={newUserFormData.password2}
            />
            </label>
            <button className="login-page__button" >
               Registruotis
            </button>
         </form>
      </div>
   )
}

export { NewUserPage }