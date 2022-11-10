import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import Sidebar from "../../sidebar/Sidebar";
import {useUser} from "../../../contexts/UserContext";
import {userRoles} from "../../../config/config";

const AuthLayout = () => {
    const {userData} = useUser();

    return(
        <div>
            <div>
                <Navigation/>
            </div>
            <div style={{display: 'flex'}}>
                {userData?.role === userRoles.EMPLOYEE &&
                <Sidebar/>
                }
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;
