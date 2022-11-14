import React from 'react';
import {clients} from "../../services/ClientService";
import {storageService} from "../../services/StorageService";
import {storageKeys} from "../../config/config";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const login = (id) => {
        storageService.set(storageKeys.USER, id)
        setTimeout(() => {
            navigate('/')
        }, 300)

    }

    return <div>
        {clients.map(item => {
            return <button onClick={() => login(item.id)}>Log as {item?.role} {item?.firstName}</button>
        })}
    </div>
}

export default Login;