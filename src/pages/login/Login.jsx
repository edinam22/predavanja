import React from 'react';
import {storageService} from "../../services/StorageService";
import {storageKeys} from "../../config/config";
import {useNavigate} from 'react-router-dom';
import {authService} from "../../services/AuthService";

const Login = () => {
    const navigate = useNavigate();

    const login = (email, password) => {
        authService.login(email, password)
            .then(r => {
                storageService.set(storageKeys.USER, r.getToken())
                setTimeout(() => {
                    navigate('/')
                }, 300)
            })
            .catch(err => {
                console.log(err?.data)
            })


    }

    return <div>
        <button onClick={() => login("user1@email.com", "12345678")}>Log as user</button>
        <button onClick={() => login("user1@email.com", "12345678")}>Log as user</button>

    </div>
}

export default Login;