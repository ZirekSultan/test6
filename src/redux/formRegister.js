import React, {useState} from "react";
import {useDispatch} from 'react-redux'

const FormForRegister = () => {
    const [username, setUserName] = useState('')
    const handleUsernameChange = (event) => {
        setUserName(event.target.value)
    }


    const [password, setPassword] = useState('')
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }


    const [verifyPassword, setVerifyPassword] = useState('')
    const verifyPasswordChange = (event) => {
        setVerifyPassword(event.target.value);
    }


    const [error, setError] = useState('')

    const dispatch = useDispatch()


   const handleRegister = () => {
        if (!username || !password || !verifyPassword) {
            setError('Заполните поля')
    }else if (password !== verifyPassword ) {
        setError ('Пароль не правильный')
     }else{
            const registeredUser = localStorage.getItem('registeredUser')
            if (username === registeredUser) {
                setError('Такой пользователь уже существует')
            }else{
                localStorage.setItem('registerUser', username)
                setError('')
                alert('Регистрация прошла успешно')
            }
        }
   }

    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="username" />
            <br />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" />
            <br />
            <input type="password" value={verifyPassword} onChange={verifyPasswordChange} placeholder="verify password" />
            <br />
            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default FormForRegister()


